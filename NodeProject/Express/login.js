const express=require("express");
login=express.Router();
login.use(express.json());

login.get("/",(req,res)=>{
    res.json({"msg":"inside login"});
});

// login.post("/postlogin",(req,res)=>{
//     res.json({"msg":"inside post login"});
//     console.log(req.body);
//     // console.log(req.body.id);
//     // console.log(req.body.password);
// });

login.get("/postlogin", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

login.post("/postlogin",(req,res)=>{
    const request = req.body;
    let id=request.id;
    let password=request.password;
     if(id==password){
        res.json({msg:"Right"});
        console.log(request);
        console.log(id);
        console.log(password);
    }
    else {
        res.json({msg:" Somthing Wrong !!! "});
    }
});


module.exports=login;