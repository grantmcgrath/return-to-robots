const express = require("express");
const routes = express.Router();
const db = require("../data.js");

routes.get("/", (req, res) => {
  let collection = db.get().collection("searchingRobos");
  
  collection.find({}).toArray((err, searchingRobos) => {
    res.render("searchingRobos", { searchingRobos: searchingRobos});
  });
});

module.exports = routes;
