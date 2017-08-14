const express = require("express");
const fs = require("fs");
// const db = require("./data");
const exBars = require("express-handlebars");
// const robosRoutes = require("./routes/robos");
// const workingRobosRoutes = require("./routes/workingRobos");
// const searchingRobosRoutes = require("./routes/searchingRobos");
const app = express();
const MongoClient = require("mongodb").MongoClient;

// Connection URL
var url = "mongodb://localhost:27017/returnToRobos";

// Uses handlebars as the engine
app.engine("handlebars", exBars());
app.set("views", "./views");
app.set("view engine", "handlebars");

// Loads static files
app.use(express.static("css"));

// Routes
// app.use("/", robosRoutes);
// app.use("/workingRobos", workingRobosRoutes);
// app.use("/searchingRobos", searchingRobosRoutes);
var db;

app.get("/", (req, res) => {
  let collection = db.collection("robots");

  collection.find({}).toArray(function(err, robots) {
    res.render("home", {robots: robots});
  });
});

app.get("/searching", (req, res) => {
  let collection = db.collection("robots");

  collection.find({}).toArray(function(err, robots) {
    res.render("searchingRobos", {robots: robots});
  });
});

app.get("/employed", (req, res) => {
  let collection = db.collection("robots");

  collection.find({}).toArray(function(err, robots) {
    res.render("workingRobos", {robots: robots});
  });
});

// Use connect method to connect to the server
MongoClient.connect(url, (err, connection) => {
  db = connection;
  if (!err) console.log("Mongo Good");

  app.listen(3000, () => console.log("The magic server seems to be working.?!"));
});
