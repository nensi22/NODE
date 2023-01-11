const express = require("express");
const jwtToken = require("jwt-simple");
const tokenObj = require("../Token/token");
login = express.Router();

login.get("/",(req,res)=>{
    res.json({"msg" : "inside login"});
});

login.post("/",(req,res)=>{
    const uname=req.body.uname;
    const upwd=req.body.upwd;

    if(uname == "admin" && upwd == "admin123")
    {
        const token = jwtToken.encode({uname:uname,upwd:upwd},"skill");
        tokenObj.token=token;
        res.json({login:"Success",token:token})
    }
    else 
    {
        res.json({login:"fail"});
    }
});

module.exports=login;