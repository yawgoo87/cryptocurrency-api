const express = require("express");
const tokenContract = require("../contracts/tokenContract");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const decimals = await tokenContract.methods.decimals().call();
  const totalSupply = await tokenContract.methods.totalSupply().call();
  const adjustedTotalSupply = totalSupply * 10 ** -decimals;
  return res.status(200).json(adjustedTotalSupply);
});

module.exports = router;