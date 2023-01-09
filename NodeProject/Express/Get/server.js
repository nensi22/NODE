const express = require("express");
const app = express();
const PORT = 1001;
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "Defult" });
});

// const login = require("./login");
// app.use("/login", login);


// http://localhost:1001/login?uname=skill&upwd=qode
app.get("/login", (req, res) => {
    let query = req.query;
    console.log(query);
    console.log(query.uname);
    console.log(query.upwd);
    res.json({ "username": "id", "password": "upwd" });
});

// app.get("/login/:id/:upwd", (req, res) => {
//     let data = req.params
//     console.log(data);
//     console.log(data.id);
//     console.log(data.upwd);
//     res.json({ "username": "id", "password": "upwd" });
// });

app.listen(PORT, () => {
    console.log(`server listening port ${PORT}`)
});