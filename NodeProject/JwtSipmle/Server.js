const express = require("express");
const app = express();
const PORT = 1001;
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "hello" });
});

const login = require("./Login/login");
app.use("/login", login);

const module1 = require("./Module1/module1");
app.use("/module1", module1);

const module2 = require("./Module2/module2");
app.use("/module2", module2);

const module3 = require("./Module3/module3");
app.use("/module3", module3);


app.listen(PORT, () => {
    console.log(`server listening port ${PORT}`)
});

