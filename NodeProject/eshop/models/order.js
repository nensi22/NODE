const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderiterms: { type: Array, required: true },
    shippingAddress1: { type: String, required: true },
    shippingAddress2: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    status: { type: String, required: true },
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