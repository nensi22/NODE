const express = require("express");
const tokenObj = require("../Token/token");
module3=express.Router();

module3.get("/",(req,res)=>{
    const headerToken = req.headers.token;
    if(headerToken == tokenObj.token)
        res.json({"msg":"inside module3 success",token:tokenObj.token});
    else
        res.json({"msg":"inside module3 fail"});
    
});

module.exports=module3;