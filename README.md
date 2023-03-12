# Cryptocurrency API
**INTRODUCTION:** Most services that offer APIs bypass the world of _DeFi_ with its variety of small start-up projects. But decentralization just made it possible to create an easy, universal solution. It's priority: DEX exchangers such as PancakeSwap, Uniswap and others. Also, this solution works properly for all blockchains based on Ethereum, like: _Binance Smart Chain, Polygon, Optimism, Avalanche, Arbitrum_ and others. Read the instructions for customizing and using this api below

***This API offers the fetchable data about token in JSON format.***

I used [CAKE-WBNB](https://pancakeswap.finance/swap?outputCurrency=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82) pair on PancakeSwap, Let's how does it work:
- [/tradingData](https://cryptocurrency-api-blush.vercel.app/tradingData)
- [/totalSupply](https://cryptocurrency-api-blush.vercel.app/totalSupply)
- [/circulationSupply](https://cryptocurrency-api-blush.vercel.app/circulationSupply)
- [/amountBurned](https://cryptocurrency-api-blush.vercel.app/amountBurned)

How does routes are built on example:
```
  ___________________link_____________________     ___route_name___
 |                                            | + |                |
  https://cryptocurrency-api-blush.vercel.app/     circulationSupply
```

## Let's look at the purpose of each route

### /tradingData
**Trading data** displays main information about each token in the pair like name, symbol and address. Also it contains information about current price in pair token and USD. There is the structure example:
```json
{
  "token": {
    "tokenName": "PancakeSwap Token",
    "tokenTicker": "Cake",
    "tokenAddress": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
  },
  "pairToken": {
    "pairTokenName": "Wrapped BNB",
    "pairTokenTicker": "BNB",
    "pairAddress": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
  },
  "timeStamp": 1678567244740,
  "priceToPair": 0.012667024667747299,
  "priceToUSDT": 3.4765915903099236
}
```

### /totalSupply
***Total supply*** displays amount of tokens that was minted, excluding tokens that was Burned or they are on the balance of zero-address

🚩Formula is: `total supply = minted tokens - burned tokens`

### /circulationSupply
***Circulation supply*** In fact, this is a rather arbitrary value, but its essence is that it displays the number of tokens that are not blocked and can theoretically participate in circulation. Blocked tokens can mean developer wallets, smart contracts for staking, and in general everything that excludes tokens from free circulation

🚩Formula is: `circulation supply = total supply - (tokens on dev's wallets + tokens in stacking smart-contracts + ...)`

### /amountBurned
***Amount burned*** displays amount of tokens that have been burned. Depending on the features of the smart contract, they can be moved to zero address or burned using an internal function of the smart contract (In this case, the smart contract emits an event called "Burning")

⚠️IMPORTANT: To count the number of burned tokens, the script parses the "Burning" events. Event data parsing is limited to 9900 blocks. The result may not be accurate for tokens issued a very long time ago

## Configuration
All files that need to be edited for customization are located in the [cfg](../main/cfg) folder
For example, I used the WBNB-CAKE trading pair on PancakeSwap to demonstrate filling out the config.js file

Let's consider its structure in more detail:
#### RPC URL
Here you insert a link to the blockchain node where your smart contract is deployed. It can be Ethereum, Binance Smart Chain, Polygon and others. To select a node, I recommend [chainlist.org](https://chainlist.org/)
In this example example i used Binance Smart Chain:
```javascript
// Blockchain RPC URL
const rpcUrl = 'https://bsc-dataseed1.binance.org';
```
#### Token address
After deploying your own token, you should have its address, paste it here📝 There is CAKE token address as example, you can check it on [BscScan](https://bscscan.com/address/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82)
```javascript
// Your token address
const tokenAddress = '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'; // CAKE [Example]
```
#### Pair token address
The trading pair of the CAKE token is WBNB, so you need to insert the address of the WBNB token here, check it on [BscScan](https://bscscan.com/address/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c)
```javascript
// Pair token address
const pairAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'; // WBNB [Example]
```
#### Pair token ticker(symbol)
This symbol will be displayed at the endpoint /tradingData
```javascript
const pairTokenTicker = 'BNB';
```
#### Pair coin id on CoinGecko
This is necessary to calculate the exact price of the token. to do this, go to [CoinGecko], find the pair with which your token is traded and copy its ID. This can be done as shown in the illustration.

```javascript
// Pair coin id on CoinGecko
const pairCoinId = 'binancecoin';
```

