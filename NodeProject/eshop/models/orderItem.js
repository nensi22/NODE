const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    id: { type: String, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true }
});

const Orderitem = mongoose.model('Orderitems', orderItemSchema);

module.exports = Orderitem;