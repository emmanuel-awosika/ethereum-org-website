import type { GrowThePieData } from "../types"

type DataItem = {
  metric_key: string
  origin_key: string
  date: string
  value: number
}

const TXCOSTS_MEDIAN_USD = "txcosts_median_usd"
const TXCOUNT = "txcount"

export const fetchGrowThePie = async (): Promise<GrowThePieData> => {
  const url = "https://api.growthepie.xyz/v1/fundamentals_full.json"
  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.log(response.status, response.statusText)
      throw new Error("Failed to fetch GrowThePie data")
    }
    const data: DataItem[] = await response.json()

    const mostRecentDate = data.reduce((latest, item) => {
      const itemDate = new Date(item.date)
      return itemDate > new Date(latest) ? item.date : latest
    }, data[0].date)

    const mostRecentData = data.filter(
      (item) =>
        item.date === mostRecentDate &&
        [TXCOSTS_MEDIAN_USD, TXCOUNT].includes(item.metric_key)
    )

    let totalTxCount = 0
    let weightedSum = 0

    mostRecentData.forEach((item) => {
      if (item.metric_key !== TXCOSTS_MEDIAN_USD) return

      const txCountItem = mostRecentData.find(
        (txItem) =>
          txItem.metric_key === TXCOUNT && txItem.origin_key === item.origin_key
      )
      if (!txCountItem) return

      totalTxCount += txCountItem.value
      weightedSum += item.value * txCountItem.value
    })

    // The weighted average of txcosts_median_usd, by txcount on each network (origin_key)
    const weightedAverage = totalTxCount ? weightedSum / totalTxCount : 0

    // Last updated timestamp
    const timestamp = Date.now()

    return {
      txCount: { value: totalTxCount, timestamp },
      txCostsMedianUsd: { value: weightedAverage, timestamp },
    }
  } catch (error: unknown) {
    console.error((error as Error).message)
    return {
      txCount: { error: (error as Error).message },
      txCostsMedianUsd: { error: (error as Error).message },
    }
  }
}