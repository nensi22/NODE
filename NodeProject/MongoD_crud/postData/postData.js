const express = require("express");
const postData=express.Router();

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://admin:admin@cluster0.p8da507.mongodb.net/?retryWrites=true&w=majority';


postData.post("/",(req,res)=>{

    mongoClient.connect(url,(err,connection)=>{
        if(err)
            throw err;
        else
        {
            const db = connection.db("books")
            db.collection("book").insertOne({"title":req.body.title,
                                                "isbn":req.body.isbn,
                                                "downloadable":req.body.downloadable,
                                                "no_of_reviews":req.body.no_of_reviews},(err,result)=>{
                                                    if(err)
                                                        throw err;
                                                    else{
                                                        res.send({insert:"success"});
                                                    }
                                                })
        }
    })
});

module.exports=postData;