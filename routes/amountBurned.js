const express = require("express");
const tokenContract = require("../contracts/tokenContract");
const zeroAddress = '0x0000000000000000000000000000000000000000';
const deploymentTxn = require("../cfg/config").deploymentTxn;
const router = express.Router();

const Web3 = require("web3");
const rpcUrl = require("../cfg/config").rpcUrl;
const web3 = new Web3(rpcUrl);

router.get("/", async (req, res, next) => {
  
  let amountBurned = 0;
  const decimals = await tokenContract.methods.decimals().call();
  
  txnData = await web3.eth.getTransactionReceipt(deploymentTxn);
  console.log(txnData)
  tokenDeploymentBlock = await txnData.blockNumber;
  currentBlock = await web3.eth.getBlockNumber();

  const burnTransactions = await tokenContract.getPastEvents('Transfer',
  {
    filter: { to: zeroAddress },
    fromBlock: tokenDeploymentBlock,
    toBlock: currentBlock,
  })
  .catch((err) => console.error(err));

  burnTransactions.forEach(element => {
    amountBurned += element.returnValues.value * 10 ** -decimals
  });

  return res.status(200).json(amountBurned);
});

module.exports = router;