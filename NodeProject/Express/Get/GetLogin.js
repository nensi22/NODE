// const express = require("express");
// login = express.Router();
// login.use(express.json());
// login.use(express.urlencoded())


// login.get("/", (req, res) => {
//     res.json({ 'msg': "inside a login" })
// });

// // http://localhost:1001/login?id=skill&upwd=qode
// login.get("/login", (req, res) => {
//     let query = req.query;
//     console.log(query);
//     console.log(query.uname);
//     console.log(query.upwd);
//     res.json({ "username": "id", "password": "upwd" });
// });


// app.get("/login/:id/:upwd", (req, res) => {
//     let data = req.params
//     console.log(data);
//     console.log(data.id);
//     console.log(data.upwd);
//     res.json({ "username": "id", "password": "upwd" });
// });
