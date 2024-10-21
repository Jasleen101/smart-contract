----------------------course--------------------------
udemy course project overview: ethereum-and-solidity-the-complete-developers-guide

This repository contains a simple Ethereum smart contract project called Inbox, written in Solidity. It allows users to set and retrieve messages on the Ethereum blockchain. The contract, along with the test suite, is designed to be deployed and tested on a local Ethereum network using Ganache and Web3.

-----------------Project Structure--------------------
contracts/Inbox.sol: Contains the smart contract code written in Solidity.
compile.js: A script to compile the contract, generating the ABI and bytecode for deployment.
test/inbox.test.js: Contains the test cases to validate the contract's functionality using Mocha and Ganache.

--------------------To run this project, you need the following installed:--------------------
Node.js
NPM
Ganache
Solidity Compiler
web3

--------------------Running the Tests--------------------
To run the test suite, use the following command:

bash
Copy code
npm run test