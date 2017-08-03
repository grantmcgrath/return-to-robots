const express = require("express");
const MongoClient = require("mongodb").MongoClient,
  assert = require("assert");
const app = express();

// Connection URL
var url = 'mongodb://localhost:27017/daily-project';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  // db.close();
app.listen(3000, () => console.log("The magic server seems to be working.?!"));


});
