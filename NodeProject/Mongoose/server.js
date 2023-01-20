const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const data = require("./data");
const User = require("./userModel");

mongoose.set("strictQuery", true);

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3300;

mongoose
    .connect("mongodb+srv://admin:admin@cluster0.p8da507.mongodb.net/User?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected!"))
    .catch((err) => {
        console.log(err);
    });

app.post("/insert_records", (req, res) => {
    console.log(data.users);
    const result = User.insertMany(data.users);
    res.send(result);
});

app.get('/get_data', (req, res) => {
    User.find({}, (err, result) => {
        if (err)
            throw err;
        else {
            res.send(result);
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server Listening PORT ${PORT}`);
});


