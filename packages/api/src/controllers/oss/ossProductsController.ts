import asyncHandler from "express-async-handler";
import { Product } from "../../models/product";

// @ GET ALL PRODUCTS
// GET /api/oss/products
// public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).populate("user", "-password"); // empty object returns everything

  res.json(products);
});

// @ GET SINGLE PRODUCT
// GET /api/oss/products/product/:id
// public
export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// @ DELETE SINGLE PRODUCT
// DELETE /api/oss/products/product/:id
// public
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();

    res.json({ message: "Product deleted.", _id: req.params.id });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// @ CREATE SINGLE PRODUCT
// POST /api/oss/products/product
// public
export const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    // @ts-ignore
    user: req.user._id,
    name: req.body.name,
    img: req.body.img,
    brand: req.body.brand,
    category: req.body.category,
    description: req.body.description,
    reviews: req.body.reviews ?? [],
    rating: req.body.rating,
    numOFReviews: req.body.numOFReviews ?? 0,
    price: req.body.price,
    countInStock: req.body.countInStock,
  });
  const createdProduct = await product.save();

  if (createdProduct) {
    res.json(createdProduct);
  } else {
    res.status(404).json({ message: "Product not created." });
  }
});

// @ UPDATE SINGLE PRODUCT
// PUT /api/oss/products/product/:id
// public
export const editProduct = asyncHandler(async (req, res) => {
  const { name, img, brand, category, description, reviews, rating, numOFReviews, price, countInStock } = req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.img = img;
    product.brand = brand;
    product.category = category;
    product.description = description;
    product.reviews = reviews;
    product.rating = rating;
    product.numOFReviews = numOFReviews;
    product.price = price;
    product.countInStock = countInStock;
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } else {
    res.status(404).json({ message: "Product not updated." });
  }
});
