// compiles the contract source code and spits out the ABI (javascript intepretation layer) 
// and contract bytecode (deployed to ethereum network)

// read contents of inbox.sol from memory
// First generate path and dont hard code it for platform agnostic
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// compiles code
module.exports = solc.compile(source, 1).contracts[':Inbox'];