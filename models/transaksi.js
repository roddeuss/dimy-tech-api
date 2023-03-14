const mongoose = require("mongoose");

const transaksiSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: true,
    },
    customer_address: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    payment_name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const Transaksi = mongoose.model("Transaksi", transaksiSchema);
module.exports = Transaksi;
