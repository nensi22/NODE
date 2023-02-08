const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require("cors");
require("dotenv/config");
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

app.use(cors());
app.options("*", cors());

mongoose.pluralize(null);
mongoose.set("strictQuery", true);
app.use(morgan('tiny'));

app.use(authJwt());
app.use(errorHandler);

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.json({ 'msg': "default" });
});

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
    });

app.use('/getusers', require('./routes/users'));
app.use('/getcategory', require('./routes/categories'));
app.use('/getproducts', require('./routes/products'));
app.use('/getorders', require('./routes/orders'));
app.use('/getorderitems', require('./routes/orderItems'));

app.use('/postusers', require('./routes/users'));
app.use('/postcategory', require('./routes/categories'));
app.use('/postproducts', require('./routes/products'));
app.use('/postorders', require('./routes/orders'));
app.use('/postorderitems', require('./routes/orderItems'));

app.use('/updateusers', require('./routes/users'));
app.use('/updatecategory', require('./routes/categories'));
app.use('/updateproducts', require('./routes/products'));
app.use('/updateorders', require('./routes/orders'));
app.use('/updateorderitems', require('./routes/orderItems'));

app.use('/deleteusers', require('./routes/users'));
app.use('/deletecategory', require('./routes/categories'));
app.use('/deleteproducts', require('./routes/products'));
app.use('/deleteorders', require('./routes/orders'));
app.use('/deleteorderitems', require('./routes/orderItems'));

app.use('/user', require('./routes/users'));

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server listening Port : ${PORT}`);
})