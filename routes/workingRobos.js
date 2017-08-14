const express = require("express");
const routes = express.Router();
const db = require("../data.js");

routes.get("/", (req, res) => {
  let collection = db.get().collection("workingRobos");
  
  collection.find({}).toArray((err, workingRobos) => {
    res.render("workingRobos", { workingRobos: workingRobos});
  });
});

module.exports = routes;
