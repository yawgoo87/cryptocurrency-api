const Web3 = require("web3");
const abi = require("../cfg/abi/tokenABI.json");
const rpcUrl = require("../cfg/config").rpcUrl;
const tokenAddress = require("../cfg/config").tokenAddress;

const web3 = new Web3(rpcUrl); // @dev Input blockchain node link
const tokenContract = new web3.eth.Contract(abi, tokenAddress); // @dev Input smart-contract that you need

module.exports = tokenContract;