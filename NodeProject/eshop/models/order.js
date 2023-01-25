const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderitems: [
        {type: mongoose.Schema.Types.ObjectId,ref:"Orderitems", required: true }
    ],
    shippingAddress1: { type: String, required: true },
    shippingAddress2: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    status: { type: String, required: true ,default:"pending"},
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId,ref:"Users", required: true },
    dateOrdered: { type: Date,default:Date.now()},
});

orderSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

orderSchema.set("toJSON", {
    virtuals: true,
});

const Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders;

/*
 orderitems: [
        {
            "quantity":4,
            "product": 63ce4fcc6afb9eb0357efcf0
        },
        {
            "quantity":3,
            "product": 63cfc6b9e357498d8d1d1df7
        }
    ]
    "shippingAddress1": "SkillQode",
    "shippingAddress2": "MicraSolution",
    "city": "Surat",
    "zip": "395010",
    "Country": "India",
    "phone": 9499556267,
    "status": "Packed",
    "totalPrice": 99999,
    "user": "63cf912bdf69514eda4450f4",
*/