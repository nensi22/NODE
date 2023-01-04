const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded());

app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/form.html");
});

app.get("/login",(req,res)=>{
    const request = req.body;
    console.log("Data get",request);
})

app.post("/login",(req,res)=>{
    res.json({msg:"Login post"});
    const request = req.body;
    console.log("post Data",request);
});

app.listen(PORT,()=>{
    console.log(`server listening port ${PORT}`);
});
