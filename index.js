// Import packages
const express = require("express");
const totalSupply = require("./routes/totalSupply");
const circulationSupply = require("./routes/circulationSupply");
const amountBurned = require("./routes/amountBurned");
const tradingData = require("./routes/tradingData");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/totalSupply", totalSupply);
app.use("/circulationSupply", circulationSupply);
app.use("/amountBurned", amountBurned);
app.use("/tradingData", tradingData);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
