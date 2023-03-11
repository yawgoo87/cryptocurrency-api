// Blockchain RPC URL
const rpcUrl = 'https://bsc-mainnet.gateway.pokt.network/v1/lb/6136201a7bad1500343e248d';

// Your token address
const tokenAddress = '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'; // CAKE [Example]

// Pair token address
const pairAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'; // WBNB [Example]

const pairTokenTicker = 'BNB';

// Pair coin id on CoinGecko
const pairCoinId = 'binancecoin';

// Your token deployment Txn Hash
const deploymentTxn = '0x7dd36f3b6d38f8a6b2f2fb0c850a75d57114a1b2fdcd350eaeee609cf3d827ae';

const liquidityPoolAddress = '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0';

// Addresses where tokens do not participate in circulation like owner, reserve wallets, etc.
const lockedWallets = [
    '0x73feaa1eE314F8c655E354234017bE2193C9E24E', // Main staking contract [Example]
    '0x0F9399FC81DaC77908A2Dde54Bb87Ee2D17a3373', // Owner [Example] 
]

module.exports = {rpcUrl, tokenAddress, pairAddress, lockedWallets, deploymentTxn, liquidityPoolAddress, pairTokenTicker, pairCoinId};



