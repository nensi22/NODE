const express=require("express");
const app=express();
const PORT=1001;

app.use(express.json());

const getData = require("./getData/getData");
app.use("/getData",getData);

app.listen(PORT,()=>{
    console.log(`Server Listening PORT ${PORT}`);
});


