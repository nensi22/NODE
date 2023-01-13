const express = require("express");
const putData=express.Router();

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://admin:admin@cluster0.p8da507.mongodb.net/?retryWrites=true&w=majority';


putData.put("/",(req,res)=>{

    mongoClient.connect(url,(err,connection)=>{
        if(err)
            throw err;
        else
        {
            const db = connection.db("books")
            db.collection("book").updateOne(
                                            {"title":req.body.title},
                                            {$set : {no_of_reviews:req.body.no_of_reviews}},
                                            (err,result)=>{
                                            if(err)
                                                throw err;
                                            else{
                                                res.send({update :"success"});
                                            }
                                        }
                                    );
            
        }
    })
});

module.exports=putData;