const express = require("express");
const routes = express.Router();
const db = require("data.js");

routes.get("/", (req, res) => {
  let collection = db.get().collection("return-to-robos");

  collection.find({}).toArray((err, robos) => {
    res.render("home", { robos: robos});
  });
});

module.exports = routes;
