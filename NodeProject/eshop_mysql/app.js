const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const authJwt = require("./Helpers/jwt");
const errorHandler = require("./Helpers/error-handler");
require("dotenv/config");
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded());

app.use(authJwt());
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({ "msg": "default" });
});

const connection = require("./middleware/dbconnection");
connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("databases connected successfully");
  }
});

app.use("/users", require("./routes/users"));

app.use("/category", require("./routes/category"));

app.use("/products", require("./routes/products"));

app.use("/orders", require("./routes/orders"));

app.listen(PORT, () => {
  console.log(`Server listening Port : ${PORT}`);
});
