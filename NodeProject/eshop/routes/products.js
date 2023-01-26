const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Category = require("../models/category")
const Product = require('../models/product');

router.use(express.json());
router.use(express.urlencoded());


router.get("/:id",async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(500).json({ massage: "The Product with the give Id was not found....!" });
    }
    res.status(200).send(product);
})

router.post("/",async(req,res)=>{
    const CategoryCheck = await Category.findById(req.body.category);
    if(!CategoryCheck) return res.status(400).send("Invalid category");

    let product = new Product({
      
        name: req.body.name,
        description: req.body.description,
        richdescription: req.body.richdescription,
        image: "path",
        images: req.body.images,
        brands: req.body.brands,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        isFeatured: req.body.isFeatured,
    });

   product = await product.save();
   if(!product) return res.status(500).send("the product can not be created");
   res.send(product);
});

router.put('/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id,
        {
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
        }, { new: true }
    );
    if (!product) return res.status(500).send("The Product cannot be Update.....!");
    res.send(product);
});

router.delete("/:id",async(req,res)=>{
    Product.findByIdAndRemove(req.params.id)
        .then((product) => {
            if (product) {
                return res.status(200).json({ success: true, massage: "The Product is deleted....!" })
            }
            else {
                return res.status(404).json({ success: false, massage: "The Product is not found....!" })
            }
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err });
        })
});


// router.delete('/:id', async (req, res) => {
//     const product = await Product.findByIdAndRemove(req.params.id);
//     if (!product) return res.status(500).send("The Products cannot be deleted.....!");
//     res.send({ massage: "The Product is deleted" });
// });



module.exports = router;