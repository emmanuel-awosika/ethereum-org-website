---
title: Testing smart contracts
description: An overview of techniques and considerations for testing Ethereum smart contracts
lang: en
sidebar: true
incomplete: true
---

# Testing smart contracts {#testing-smart-contracts}

Testing [smart contracts](/developers/docs/smart-contracts/) is one of the most important measures for guaranteeing the security of [decentralized applications](/dapps/). Unlike traditional software, smart contracts are immutable, making it imperative to analyze your code rigorously before deploying contracts on the Ethereum network. 

## What is smart contract testing? {#what-is-smart-contract-testing}

Smart contract testing means performing detailed analysis and evaluation of a smart contract to identify bugs and potential vulnerabilities. Testing a smart contract allows you to assess the quality of the source code during the development cycle and improves [smart contract security](/developers/docs/smart-contracts/security/).

Smart contract testing takes many forms, with different methods offering benefits. Strategies for testing Ethereum smart contracts can be classified into two broad categories: **automated testing** and **manual testing**. 

### Automated testing {#automated-testing}

Automated testing involves using automated tools to carry out scripted testing of smart contracts. This technique relies on automated software that can execute repeated tests to find defects in smart contracts.

Automated testing is efficient, uses fewer resources, and promises higher levels of coverage than manual analysis. Automated testing tools can also be configured with test data, allowing them to compare predicted behaviors with actual results. 

### Manual testing {#manual-testing}

Manual testing is human-aided and involves an individual who executes testing steps manually. Code audits are an example of manual testing for smart contracts. 

Manual testing of smart contracts requires considerable skill and a considerable investment of time, money, and effort. Also, this technique is susceptible to the problems of human error. 

But manual testing also offers benefits for developers. For example, it harnesses human intelligence to find defects in contract code that might go undetected during automated testing. 

Manual-testing your smart contracts can also reveal vulnerabilities that exist outside the code, but can still affect it. For instance, a smart contract audit can discover vulnerabilities arising from flawed interaction with off-chain components. 

## Why is it important to test smart contracts? {#benefits-of-smart-contract-testing}

Testing smart contracts is important for the following reasons:

### Smart contracts are high-value applications {#smart-contracts-are-high-value-applications}

Smart contracts often deal with high-value financial assets and valuable items (e.g., NFTs). As such, minor vulnerabilities in smart contracts can and often lead to massive, irrecoverable losses for users. Rigorous testing can expose errors in smart contract code and reduce security risks before deployment. 

### Smart contracts are immutable {#smart-contracts-are-immutable}

Smart contracts deployed in the [Ethereum Virtual Machine (EVM)](/developers/docs/evm/) are immutable by default. While traditional developers may be used to fixing software bugs after launching, Ethereum development leaves little room for patching security flaws once a smart contract is live on the blockchain. 

Upgradeability mechanisms for smart contracts, such as proxy patterns, exist—but these can be difficult to implement. Besides reducing immutability and introducing complexity, upgrades often demand complex governance processes. 

For the most part, upgrades should be considered a last resort and avoided unless necessary.  Detecting potential vulnerabilities and flaws in your smart contract during the pre-launch phase reduces the need for a logic upgrade later on. 

## Automated testing for smart contracts {#automated-testing-for-smart-contracts}

### Unit testing {#unit-testing}

Unit testing is an approach that involves testing individual components in a smart contract for correctness. A unit test is simple, quick to run, and provides a clear idea of what went wrong if the test fails. 

Unit tests are crucial for smart contract development, especially if you need to add new logic to the code. Unit testing verifies the behavior of specific parts of your code and confirms that they execute as intended. 

### Static/dynamic analysis {#static-dynamic-analysis}

Static analysis and dynamic analysis are two automated testing methods for evaluating the security qualities of smart contracts. Both techniques, however, use different approaches for finding defects in contract code. 

- **Static analysis**

Static analysis examines the source code or bytecode of a smart contract before execution. This means you can debug contract code without actually running the program. Static analyzers can detect common vulnerabilities in Ethereum smart contracts and aid compliance with best practices. 

- **Dynamic analysis**

Dynamic analysis techniques require executing the smart contract in a runtime environment to identify issues in your code. Dynamic code analyzers observe contract behaviors during execution and generate a detailed report of identified vulnerabilities and property violations. 

### Formal verification {#formal-verification}

Formal verification is a more rigorous technique for testing Ethereum smart contracts and asserting the correctness of code. Formal verification uses [formal methods](https://en.wikipedia.org/wiki/Formal_methods)—mathematically rigorous techniques for specifying and verifying software. 

Formal verification is considered important for smart contracts because it helps developers formally test assumptions relating to smart contracts. You can create specifications—properties describing expected results—and see if the contract's behavior matches the specifications. 

### Manual testing for smart contracts {#manual-testing-for-smart-contracts}

### Code audits {#code-audits}

A code audit is a detailed evaluation of a smart contract's source code to uncover possible failure-points, security flaws, and poor development practices. While code audits can be automated, we refer to human-aided code analysis here. 

Code audits require an attacker mindset to map out possible attack vectors in smart contracts. Even if you run automated audits, analyzing every line of source code is a minimum requirement for writing secure smart contracts. 

You can also commission a security audit to give users higher assurances of smart contract safety. Audits benefit from extensive analysis performed by cybersecurity professionals and detect potential vulnerabilities or bugs that could break the smart contract functionality. 

### Bug bounties {#bug-bounties}

A bug bounty is a financial reward given to an individual who discovers a vulnerability or bug in a program's code and reports to developers. Bug bounties are similar to audits since it involves asking others to help find defects in smart contracts. The major difference is that bug bounty programs are open to the wider developer/hacker community. 

Bug bounty programs often attract a broad class of ethical hackers and independent security professionals with unique skills and experience. This may be an advantage over smart contract audits that mainly rely on teams who may possess limited or narrow expertise.

## Testing tools and libraries {#testing tools-and-libraries}

### Unit testing tools {#unit-testing-tools}

**Solidity-Coverage -** **_A Solidity code coverage tool useful for testing smart contracts._**
- [GitHub](https://github.com/sc-forks/solidity-coverage)

**Waffle - _A framework for advanced smart contract development and testing (based on ethers.js)_.**
- [Documentation](https://ethereum-waffle.readthedocs.io/en/latest/)
- [GitHub](https://github.com/TrueFiEng/Waffle) 
- [Website](https://getwaffle.io/)

**Remix Tests - _A tool for testing Solidity smart contracts. Works underneath Remix IDE "Solidity Unit Testing" plugin which is used to write and run test cases for a contract._**
- [Documentation](https://remix-ide.readthedocs.io/en/latest/unittesting.html) 
- [GitHub](https://github.com/ethereum/remix-project/tree/master/libs/remix-tests)  

**OpenZeppelin Test Helpers - _Assertion library for Ethereum smart contract testing. Make sure your contracts behave as expected!_**
- [GitHub](https://github.com/OpenZeppelin/openzeppelin-test-helpers) 
- [Documentation](https://docs.openzeppelin.com/test-helpers) 

**OpenZeppelin test environment - _Highly configurable environment for blazing-fast smart contract testing._**
- [GitHub](https://github.com/OpenZeppelin/openzeppelin-test-environment)
- [Documentation](https://docs.openzeppelin.com/test-environment/) 

**Truffle smart contract test framework - _Automated testing framework to make testing your contracts a breeze._**
- [Documentation](https://trufflesuite.com/docs/truffle/testing/testing-your-contracts/) 
- [Website](https://trufflesuite.com/) 

**Brownie unit testing framework - _Brownie utilizes Pytest, a feature-rich test framework that lets you write small tests with minimal code, scales well for large projects, and is highly extendable._**
- [Documentation](https://eth-brownie.readthedocs.io/en/v1.0.0_a/tests.html) 
- [GitHub](https://github.com/eth-brownie/brownie) 

### Static analysis tools {#static-analysis-tools}

**Oyente - _Static analysis tool for analyzing vulnerabilities in EVM bytecode with symbolic execution._**
- [GitHub](https://github.com/melonproject/oyente)
**Mythril - _EVM bytecode assessment tool for detecting contract vulnerabilities using taint analysis, concolic analysis, and control flow checking._**

- [GitHub](https://github.com/ConsenSys/mythril-classic) 
- [Documentation](https://mythril-classic.readthedocs.io/en/master/about.html) 

**Manticore - _A static analysis tool for analyzing EVM bytecode based on symbolic execution._**
- [GitHub](https://github.com/trailofbits/manticore)  
- [Documentation](https://github.com/trailofbits/manticore/wiki) 

**Securify - _A security analyzer for analyzing Solidity code in Ethereum smart contracts and detecting property violations._**
- [GitHub](https://github.com/eth-sri/securify2) 

### Dynamic analysis tools {#dynamic-analysis-tools}

**MAIAN - _An automatic tool for finding trace vulnerabilities in Ethereum smart contracts._**
- [GitHub](https://github.com/ivicanikolicsg/MAIAN)

**Echidna - _A fast contract fuzzer for detecting vulnerabilities in smart contracts through property-based testing._**
- [GitHub](https://github.com/crytic/echidna/) 

### Smart contract auditing services {#smart-contract-auditing-services}

**ConsenSys Diligence - _ConsenSys Diligence helps projects across the blockchain ecosystem to ensure their protocols are ready for launch and built to protect users._** 
- [Website](https://consensys.net/diligence/) 

**CertiK - _CertiK is a blockchain security firm pioneering the use of cutting-edge formal Verification technology on smart contracts and blockchain networks._**
- [Website](https://www.certik.com/) 

**Trail of Bits - _Trail of Bits combines security research with an attacker mentality to reduce risk and fortify code._**
- [Website](https://www.trailofbits.com/) 

**PeckShield - _PeckShield is a blockchain security company that offers products and services for security, privacy, and usability of the entire blockchain ecosystem._**
- [Website](https://peckshield.com/) 

**QuantStamp - _QuantStamp facilitates the mainstream adoption of blockchain technology through security and risk assessment services._**
- [Website](https://quantstamp.com/) 

### Bug bounty platforms {#bug-bounty-platforms}

**Immunefi - _Immunefi is a bug bounty platform for smart contracts and DeFi projects, where security researchers review code, disclose vulnerabilities, get paid, and make crypto safer._** 
- [Website](https://immunefi.com/) 

**HackerOne - _HackerOne is a vulnerability coordination and bug bounty platform that connects businesses with penetration testers and cybersecurity researchers._**
- [Website](https://www.hackerone.com/) 

## Related tutorials {#related-tutorials}

- [Solidity and Truffle Continuous Integration Setup](/developers/tutorials/solidity-and-truffle-continuous-integration-setup/) _– How to setup Travis or Circle CI for Truffle testing along with useful plugins._
- [Testing products overview](/developers/tutorials/guide-to-smart-contract-security-tools/) _– An overview and comparison of different testing products._
- [How to use Echidna to test smart contracts](/developers/tutorials/how-to-use-echidna-to-test-smart-contracts/)
- [How to use Manticore to find smart contract bugs](/developers/tutorials/how-to-use-manticor-to-find-smart-contract-bugs/)
- [How to use Slither to find smart contract bugs](/developers/tutorials/how-to-use-slither-to-find-smart-contract-bugs/)
- [How to mock Solidity contracts for testing](/developers/tutorials/how-to-mock-solidity-contracts-for-testing/)
- [How to migrate from Truffle Tests to OpenZeppelin Test Environment](https://docs.openzeppelin.com/test-environment/0.1/migrating-from-truffle)
- [How to test contracts after they have been deployed on a network](https://fulldecent.blogspot.com/2019/04/testing-deployed-ethereum-contracts.html)

## Further Reading {#further-reading}
- [An In-Depth Guide to Testing Ethereum Smart Contracts](https://iamdefinitelyahuman.medium.com/an-in-depth-guide-to-testing-ethereum-smart-contracts-2e41b2770297) by Ben Hauser 

- [How to Test Ethereum Smart Contracts](https://betterprogramming.pub/how-to-test-ethereum-smart-contracts-35abc8fa199d) by Alex Roan 

