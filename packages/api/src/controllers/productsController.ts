import asyncHandler from "express-async-handler";
import { Product } from "../models/product";
import { buildStaticHostLink } from "../helpers/buildHostLink";

// /api/products
// public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); // empty object returns everything
  const products2 = products.map(item => {
    item.img = buildStaticHostLink({ req }) + item.img;
    return item;
  });
  res.json(products2);
});

// @ GET PRODUCTS ON SALE
// /api/products/onsale
// public
export const getProductsOnSale = asyncHandler(async (req, res) => {
  const products = await Product.find({ onSale: true }).limit(15).exec(); // empty object returns everything
  const products2 = products.map(item => {
    item.img = buildStaticHostLink({ req }) + item.img;
    return item;
  });
  res.json(products2);
});

// @ GET FEATURED PRODUCTS
// /api/products/featured
// public
export const getFeaturedProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ featured: true }).limit(15).exec(); // empty object returns everything
  const products2 = products.map(item => {
    item.img = buildStaticHostLink({ req }) + item.img;
    return item;
  });
  res.json(products2);
});

// @ GET TOP RATED PRODUCTS
// /api/products/featured
// public

export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
