const urlencoded = require("express");
const express = require('express');
const mysql = require("mysql");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

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


router.get("/",(req,res)=>{
    connection.query("select * from users",(err,data)=>{
        if(err) {
            res.json({error : "err"});
        }
        else {
            res.json({result : " data"});
        }
    });
});

router.post("/", (req, res) => {
    let { name, email} = req.body;
    let error = false;

    if (name.length === 0 || email.length === 0 ) {
        error = true;
        res.json("error", "Please enter name and email and position");
    }
    //if no error
    if (!error) {
        var form_data = {
            name: name,
            email: email
        }
    }
    connection.query("insert into users set ?", form_data, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "User successfully added" });
        }
    });
});

router.put("/:id",(req,res)=>{
    let id = req.params.id
    let { name, email} = req.body; 
    let error = false;

    if (name.length === 0 || email.length === 0 ) {
        error = true;
        res.json("error", "Please enter name and email and position");
    }

    if (!error) {
        var form_data = {
            name: name,
            email: email
        }
    }
    connection.query("update users set ? where id ="+id,form_data,(err,result)=>{
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "User successfully updated" });
        }
    });
});

router.delete("/:id",(req,res)=>{
    let id = req.params.id

    connection.query("delete from users where id = "+id,(err,result)=>{
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "User successfully deleted" });
        }
    });
});

module.exports=router;