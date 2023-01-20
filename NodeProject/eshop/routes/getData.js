const express = require('express');
const mongoose = require('mongoose');
const getData = express.Router();
const Users = require('../models/user');
const Products = require('../models/product');
const Category = require('../models/category');
const Orders = require('../models/order');
const Orderitems = require('../models/orderItem');
getData.use(express.json());
getData.use(express.urlencoded());


getData.get('/users', (req, res) => {
    Users.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});

getData.get('/category', (req, res) => {
    Category.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});
getData.get('/products', (req, res) => {
    Products.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});

getData.get('/orders', (req, res) => {
    Orders.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});


getData.get('/orderitems', (req, res) => {
    Orderitems.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});


module.exports = getData;