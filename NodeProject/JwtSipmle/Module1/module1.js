const express = require("express");
const tokenObj = require("../Token/token");
module1=express.Router();

module1.get("/",(req,res)=>{
    const headerToken = req.headers.token;
    if(headerToken == tokenObj.token)
        res.json({"msg":"inside module1 success",token:tokenObj.token});
    else
        res.json({"msg":"inside module1 fail"});
    
});

module.exports=module1;