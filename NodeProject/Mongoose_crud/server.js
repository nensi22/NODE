const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const data = require("./data");
const User = require("./userModel");

mongoose.set("strictQuery", true);

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const PORT = 3300;

mongoose.connect("mongodb+srv://admin:admin@cluster0.p8da507.mongodb.net/User?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
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

app.post("/insert_data", (req, res) => {
    console.log(data.users);
    const result = User.insertMany(data.users);
    res.send(result);
});

app.put("/update_data", (req, res) => {
    User.updateOne({ name: "skillqode" }, { $set: { email: "hr2@skillqode.in" } }, (err, result) => {
        if (err)
            throw err;
        else {
            res.send(result);
        }
    })
});

app.delete("/delete_data", (req, res) => {
    User.deleteOne({ name: "skillqode1" }, (err, result) => {
        if (err)
            throw err;
        else {
            res.send(result);
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server Listening PORT ${PORT}`);
});


