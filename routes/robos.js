const express = require("express");
const routes = express.Router();
const db = require("../data.json");
const app = express();

routes.get("/", (req, res) => {
  var collection = db.get().collection("robots");

  collection.find({}).toArray((err, robots) => {
    res.render("home", {returnToRobos: robots});
  });
});

module.exports = routes;
