const request = require("supertest");

// importing express framework
const express = require("express");

const index = express();

// Respond with "hello world" for requests that hit our root "/"
index.get("/", function (req, res) {
  return res.send("Hello World");
});

// listen to port 7000 by default
index.listen(process.env.PORT || 7000, () => {
  console.log("Server is running");
});

module.exports = index;