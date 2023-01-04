const express=require("express");
const app=express();
const PORT=4009;

app.get("/",(req,res)=>{
    res.json({msg:"Hello"});
    console.log("Hey");
});

app.get("/login",(req,res)=>{
    res.json({msg:"Login"});
});

app.post("/login",(req,res)=>{
    res.json({msg:"Login post"});
});

app.listen(PORT,()=>{
    console.log(`Server Listening PORT ${PORT}`);
});

