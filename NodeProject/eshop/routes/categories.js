const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Category = require('../models/category');

router.use(express.json());
router.use(express.urlencoded());

router.get("/:id",async(req,res)=>{
    const  category = await Category.findById(req.params.id);
    if(!category) {
        res.status(400).json({ message : "The category with the given ID was not foud. !! "});
    }
    res.status(200).send(category);
});

router.post("/",async(req,res)=>{
    let category = new Category({
        name: req.body.name ,
        color: req.body.color,
        icon: req.body.icon,
        image: req.body.image
    })
    category = await category.save();
    if(!category) return res.status(500).send(" The users can not be created !!");
    res.send(category);
});

router.put("/:id", async(req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, 
        {
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color,
        }, { new: true }
    );
    if (!category) return res.status(400).send(" the category cannot be created !!!");
    res.send(category);

});

router.delete("/:id", (req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then((category1) => {
            if (category1) {
                return res
                    .status(200)
                    .json({ success: true, massage: "the category id delete!" });
            } else {
                return res
                    .status(404)
                    .json({ success: false, massage: "category not found!" });
            }
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err })
        });
});

// router.delete('/:id', async (req, res) => {
//     const category = await Category.findByIdAndRemove(req.params.id);
//     if (!category) return res.status(400).send("The category cannot be deleted.....!");
//     res.send({ massage: "The category is deleted" });
// });

module.exports = router;