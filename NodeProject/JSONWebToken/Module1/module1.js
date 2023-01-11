const express = require("express");
const middleware = require("../MiddleWare/middleware");
const Module1 = express.Router();

// Module1.get("/", (req, res) => {
//   const allHeaders = req.headers;
//   console.log(allHeaders.token);
//   console.log(tokenObj.token);
//   if (allHeaders.token == tokenObj.token) {
//     res.json({ message: "authorized user", token: allHeaders.token });
//   } else {
//     res.json({ message: "unauthorized user" });
//   }

// });

Module1.get("/" , [middleware],(req, res,next) => {
 
  res.json({ message: "inside module 1 success"});

});

module.exports = Module1;
