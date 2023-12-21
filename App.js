const express = require("express");
const App = express();

const productsRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/order");
App.use("/order", orderRoutes);
App.use("/products", productsRoutes);

module.exports = App;
