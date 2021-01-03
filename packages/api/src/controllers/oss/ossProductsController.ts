import asyncHandler from "express-async-handler";
import { Product } from "../../models/product";

// GET /api/oss/products
// public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); // empty object returns everything
  res.json(products);
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();

    res.json({ message: "Product deleted.", _id: req.params.id });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
