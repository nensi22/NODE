const express = require("express");
const tokenObj = require("../Token/token");
module2=express.Router();

module2.get("/",(req,res)=>{
    const headerToken = req.headers.token;
    if(headerToken == tokenObj.token)
        res.json({"msg":"inside module2 success",token:tokenObj.token});
    else
        res.json({"msg":"inside module2 fail"});
    
});

module.exports=module2;