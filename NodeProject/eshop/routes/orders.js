const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Users = require('../models/user');
const Orders = require('../models/order');

router.use(express.json());
router.use(express.urlencoded());

router.get('/:id', async (req, res) => {
    const order = await Orders.findById(req.params.id);
    if (!order) {
        res.status(500).json({ massage: "The Order with the give Id was not found....!" });
    }
    res.status(200).send(order);
});

router.post('/', async (req, res) => {
    const user = await Users.findById(req.body.user);
    if (!user) return res.status(400).send("Invalid User");
    let orders = new Orders({
        orderiterms: req.body.orderiterms,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status,
        totalPrice: req.body.totalPrice,
        user: req.body.user
    });
    orders = await orders.save();
    if (!orders) return res.status(500).send("The Order cannot be created....!");
    res.send(orders);
});


router.put('/:id', async (req, res) => {
    const order = await Orders.findByIdAndUpdate(req.params.id,
        {
            orderiterms: req.body.orderiterms,
            shippingAddress1: req.body.shippingAddress1,
            shippingAddress2: req.body.shippingAddress2,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            status: req.body.status,
            totalPrice: req.body.totalPrice,
            user: req.body.user
        }, { new: true });

    if (!order) return res.status(500).send("The Order cannot be Update.....!");
    res.send(order);
});

router.delete("/:id",async(req,res)=>{
    Orders.findByIdAndRemove(req.params.id)
        .then((order) => {
            if (order) {
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

//     const order = await Orders.findByIdAndRemove(req.params.id);

//     if (!order) return res.status(500).send("The Order cannot be deleted.....!");
//     res.send({ massage: "The Order is deleted" });
// });


module.exports = router;