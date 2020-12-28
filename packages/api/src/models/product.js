"use strict";
exports.__esModule = true;
exports.Product = void 0;
var mongoose_1 = require("mongoose");
var reviewSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
}, { timestamps: true });
var productSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    name: { type: String, required: true },
    image: { type: String, unique: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, "default": 0 },
    numOFReviews: { type: Number, required: true, "default": 0 },
    price: { type: Number, required: true, "default": 0 },
    countInStock: { type: Number, required: true, "default": 0 }
}, { timestamps: true });
exports.Product = mongoose_1.model("product", productSchema);
