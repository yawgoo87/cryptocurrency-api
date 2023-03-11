const express = require("express");
const axios = require('axios');
const tokenContract = require("../contracts/tokenContract");
const pairContract = require("../contracts/pairContract");
const { response } = require("express");
const liquidityPoolAddress = require("../cfg/config").liquidityPoolAddress;
const tokenAddress = require("../cfg/config").tokenAddress;
const pairAddress = require("../cfg/config").pairAddress;
const pairCoinId = require("../cfg/config").pairCoinId;
const pairTokenTicker = require("../cfg/config").pairTokenTicker;
const router = express.Router();

router.get("/", async (req, res, next) => {

  const tokenName = await tokenContract.methods.name().call();
  const tokenTicker = await tokenContract.methods.symbol().call();
  const pairTokenName = await pairContract.methods.name().call();

  const decimals = await tokenContract.methods.decimals().call();

  const tokenPoolBalance = await tokenContract.methods.balanceOf(liquidityPoolAddress).call();
  const adjustedtokenPoolBalance = tokenPoolBalance * 10 ** -decimals;

  const pairPoolBalance = await pairContract.methods.balanceOf(liquidityPoolAddress).call();
  const adjustedpairPoolBalance = pairPoolBalance * 10 ** -decimals;

  priceToPair = adjustedpairPoolBalance / adjustedtokenPoolBalance;

  const fetchPairTokenPrice = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${pairCoinId}&vs_currencies=usd`)
  .catch((err) => console.error(err));

  const x = await fetchPairTokenPrice.data[Object.keys(fetchPairTokenPrice.data)[0]];
  const pairTokenPrice = await x[Object.keys(x)[0]];

  const priceToUSDT = priceToPair * pairTokenPrice;

  result = {
    "token": {
        "tokenName": tokenName,
        "tokenTicker": tokenTicker,
        "tokenAddress": tokenAddress
    },
    "pairToken": {
        "pairTokenName": pairTokenName,
        "pairTokenTicker": pairTokenTicker,
        "pairAddress": pairAddress
    },
    "timeStamp": Date.now(),
    "priceToPair": priceToPair,
    "priceToUSDT": priceToUSDT,
  }
  
  return res.status(200).json(result);
});

module.exports = router;
