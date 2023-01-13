const express = require("express");
const app = express();
const PORT = 1001;
app.use(express.json());

// app.get("/login", (req, res) => {
//   console.log(req.query.uname);
//   console.log(req.query.upwd);
//   //   console.log("inside get ");
//   // res.json({ msg: "inside GET Default..." });
// });
// app.get("/login/:uname/:upwd", (req, res) => {
//   console.log(req.params.uname);
//   console.log(req.params.upwd);
//   //   console.log("inside get ");
//   // res.json({ msg: "inside GET Default..." });
// });

const login = require("./LoginModule/login");
app.use("/login", login);

const Module1 = require("./Module1/module1");
app.use("/module1", Module1);

const Module2 = require("./Module2/module2");
app.use("/module2", Module2);

app.listen(PORT, () => {
  console.log(`Server listening port ${PORT}...`);
});
