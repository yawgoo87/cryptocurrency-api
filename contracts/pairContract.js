const Web3 = require("web3");
const abi = require("../cfg/abi/tokenABI.json");
const rpcUrl = require("../cfg/config").rpcUrl;
const pairAddress = require("../cfg/config").pairAddress;

const web3 = new Web3(rpcUrl); // @dev Input blockchain node link
const pairContract = new web3.eth.Contract(abi, pairAddress); // @dev Input smart-contract that you need

module.exports = pairContract;