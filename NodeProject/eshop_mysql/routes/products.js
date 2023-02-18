const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
router.use(express.json());
router.use(express.urlencoded());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin@123",
    database: "eshop",
    port: 3309
});
connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("databases connected successfully");
    }
});


router.get("/", (req, res) => {
    connection.query("select * from Products", (err, rows) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ Data: rows });
        }
    });
});

router.get("/:id", (req, res) => {
    connection.query("select * from Poducts where id =" + req.params.id, (err, rows) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ Data: rows });
        }
    });
});


router.post("/", (req, res) => {
    let { name, price, category } = req.body;
    let error = false;

    if (name.length === 0 || price.length === 0 || category.length === 0) {
        error = true;
        res.json("error", "Please enter name and price ,category");
    }
    if (!error) {
        var form_data = {
            name: req.body.name,
            description: req.body.description,
            richdescription: req.body.richdescription,
            image: "ImagePath",
            images: "ImagesPath",
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            isFeatured: req.body.isFeatured,
            dataCreated: req.body.dataCreated,

        }
    }
    connection.query("insert into Products set ?", form_data, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "Product successfully added" });
        }
    });
});


router.put("/:id", (req, res) => {
    let { name, price, category } = req.body;
    let error = false;

    if (name.length === 0 || price.length === 0 || category.length === 0) {
        error = true;
        res.json("error", "Please enter name and price , category");
    }
    if (!error) {
        var form_data = {
            name: req.body.name,
            description: req.body.description,
            richdescription: req.body.richdescription,
            image: "ImagePath",
            images: "ImagesPath",
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            isFeatured: req.body.isFeatured,
            dataCreated: req.body.dataCreated,
        }
    }
    connection.query("update Products set ? where id = " + id, form_data, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "Product successfully Update" });
        }
    });
});


router.delete("/:id", (req, res) => {
    let id = req.params.id

    connection.query("delete from Products where id = " + id, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "Product successfully delete" });
        }
    });
});;

module.exports=router;