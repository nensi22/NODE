const express = require("express");
const middleware = require("../MiddleWare/middleware");
const Module2 = express.Router();

Module2.get("/" , [middleware],(req, res,next) => {
 
    res.json({ message: "inside module 2 success"});
  
});

module.exports = Module2;
