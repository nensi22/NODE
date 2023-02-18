const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv/config");
const app = express();

app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded());


const connection = mysql.createConnection({
    host:"localhost", 
    user:"root",
    password:"admin@123",
    database:"nensi" ,

    // host :"localhost",
    // user:"root",
    // password:"admin@123",
    // database:"nensi",
    port:3309,

});

connection.connect(function(error){
    if(error) {
        console.log(error);
    }
    else {
        console.log("Database connected successfully...");
    }
});

app.use("/user",require("./routes/users"));

const PORT = process.env.PORT;
app.listen(PORT , ()=>{
    console.log(`server is running http://localhost:${PORT}`);
});