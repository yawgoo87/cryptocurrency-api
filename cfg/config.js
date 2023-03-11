// Blockchain RPC URL
const rpcUrl = 'https://data-seed-prebsc-1-s3.binance.org:8545/';

// Your token address
const tokenAddress = '0xE3681285F81A79aF089EC1Dcea71E3A1Ed67B3dA';

// Pair token address
const pairAddress = '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd';

const pairTokenTicker = 'BNB';

// Pair coin id on CoinGecko
const pairCoinId = 'binancecoin';

// Your token deployment Txn Hash
const deploymentTxn = '0xcc460e314f0ab69c589d0ed6b769105e63accb586239bda1b761f1f82acc66a6';

const liquidityPoolAddress = '0x32D40d5BA14a3751c632c0F6C9184CBf4da6F431';

// Addresses where tokens do not participate in circulation like owner, reserve wallets, etc.
const lockedWallets = [
    '0xC9ea25c2A95473d0AF6d254Aa17E8c5A82DFe4a9',
]

module.exports = {rpcUrl, tokenAddress, pairAddress, lockedWallets, deploymentTxn, liquidityPoolAddress, pairTokenTicker, pairCoinId};



