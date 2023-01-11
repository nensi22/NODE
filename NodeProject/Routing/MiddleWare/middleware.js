const tokenObj = require("../Token/token");

const middleware=((req,res,next)=>{
    const reqHeadres = req.headers;
    
    if (reqHeadres.token == tokenObj.token) {
        next();
    } 
    else {
        res.json({ message: "unauthorized user" });
    }
});


module.exports=middleware;