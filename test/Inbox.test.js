// to run this: npm run test

// the assert module makes assertions about tests
const assert = require('assert');
// create instances of the web3 library as its a constructor function, allows you to access the network
const { Web3 } = require('web3');
// local eth network
const ganache = require('ganache');
// for ganache and web3 to communicate it needs a 'provider', this can change depending on which network we're trying to connect to
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

  
// beforeEach: execute general setup code
// describe: groups together it functions
// it: runs a test and makes an assertion

// remember gananche deploys a range of unlocked account in the local test network which you can access
let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // use one of those accounts to deploy the contract (instance of a contract as it cpaital C)
  // new contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(inbox);
  });
});

  
  
  