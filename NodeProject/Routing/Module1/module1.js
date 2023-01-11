const express = require("express");
const Module1 = express.Router();

Module1.get("/", (req, res) => {
  const allHeaders = req.headers;
  console.log(allHeaders.token);
  console.log(tokenObj.token);
  if (allHeaders.token == tokenObj.token) {
    res.json({ message: "authorized user", token: allHeaders.token });
  } else {
    res.json({ message: "unauthorized user" });
  }

});

module.exports = Module1;
