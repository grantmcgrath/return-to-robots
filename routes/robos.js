const express = require("express");
const routes = express.Router();
const db = require("../data.json");

routes.get("/", (req, res) => {
  let collection = db.get().collection("robots");

  collection.find({}).toArray(function(err, robots) {
    res.render("home", {robots: robots});
  });
});

module.exports = routes;
