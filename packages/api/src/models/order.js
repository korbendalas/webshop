"use strict";
exports.__esModule = true;
exports.Order = void 0;
var mongoose_1 = require("mongoose");
var orderSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    orderItems: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            product: {
                type: mongoose_1.Schema.Types.ObjectId,
                required: true,
                ref: "product"
            }
        },
    ],
    shippingAddress: { type: String, required: true },
    address: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: String,
        email_address: String
    },
    taxPrice: {
        type: Number,
        required: true,
        "default": 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        "default": 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        "default": 0.0
    },
    isPayed: {
        type: Boolean,
        required: true,
        "default": false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        "default": false
    },
    deliveredAt: { type: Date }
}, { timestamps: true });
exports.Order = mongoose_1.model("order", orderSchema);
