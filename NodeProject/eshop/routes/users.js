const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

router.use(express.json());
router.use(express.urlencoded());


router.get('/:id', async(req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(500).json({ massage: "The User with the give Id was not found....!" });
    }
    res.status(200).send(user);
});

router.post('/', async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
        street: req.body.street,
        apartment: req.body.apartment,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
    });
    user = await user.save();
    if (!user) return res.status(500).send("The Users cannot be created.....!");
    res.send(user);
});

router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    const secret = process.env.SECRET;
    if (!user) {
        return res.status(400).send("The user not found");
    }
    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin,
            },
            secret, { expiresIn: "1d" }
        );
        res.status(200).send({ user: user.email, token: token });
    }
    else {
        res.status(400).send("Password is worng....!");
    }
});

router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            passwordHash: req.body.passwordHash,
            street: req.body.street,
            apartment: req.body.apartment,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
        }, { new: true }
    );
    if (!user) return res.status(500).send("The Users cannot be Update.....!");
    res.send(user);
});

router.delete("/:id",async(req,res)=>{
    User.findByIdAndRemove(req.params.id)
        .then((user) => {
            if (user) {
                return res.status(200).json({ success: true, massage: "The User is deleted....!" })
            }
            else {
                return res.status(404).json({ success: false, massage: "The User is not found....!" })
            } 
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err });
        })
});

// router.delete('/:id', async (req, res) => {
//     const user = await User.findByIdAndRemove(req.params.id);
//     if (!user) return res.status(500).send("The Users cannot be deleted.....!");
//     res.send({ massage: "The User is deleted" });
// });

module.exports = router;