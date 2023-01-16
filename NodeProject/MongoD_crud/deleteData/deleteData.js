const express = require("express");
const deleteData=express.Router();

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://admin:admin@cluster0.p8da507.mongodb.net/?retryWrites=true&w=majority';


deleteData.delete("/",(req,res)=>{

    mongoClient.connect(url,(err,connection)=>{
        if(err)
            throw err;
        else
        {
            const db = connection.db("books")
            db.collection("book").deleteOne( {"title":req.body.title},
                                            (err,result)=>{
                                                if(err)
                                                    throw err;
                                                else{
                                                    res.send({delete :"success"});
                                                }
                                            } 
                                        );            
        }
    })
});

module.exports=deleteData;