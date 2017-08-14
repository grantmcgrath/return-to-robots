const express = require("express");
const fs = require("fs");
const db = require("./data.js");
const exBars = require("express-handlebars");
const robosRoutes = require("./routes/robos.js");
const workingRobosRoutes = require("./routes/workingRobos.js");
const searchingRobosRoutes = require("./routes/searchingRobos.js");
const app = express();
const MongoClient = require("mongodb").MongoClient;

// Connection URL
var url = "mongodb://localhost:27017/return-to-robos";

// Uses handlebars as the engine
app.engine("handlebars", exBars());
app.set("views", "./views");
app.set("view engine", "handlebars");

// Routes
app.use("/", robosRoutes);
app.use("/workingRobos", workingRobosRoutes);
app.use("/searchingRobos", searchingRobosRoutes);

// Use connect method to connect to the server
MongoClient.connect(url, (err, connection) => {
  if (!err) console.log("Mongo Good");

  app.listen(3000, () => console.log("The magic server seems to be working.?!"));
});
