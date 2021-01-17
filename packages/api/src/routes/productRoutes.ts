import express from "express";
import asyncHandler from "express-async-handler";
import { Product } from "../models/product";
import { protect } from "../middleware/authMiddleware";

import {
  getProducts,
  getProduct,
  getProductsOnSale,
  getFeaturedProducts,
  createProductReview,
} from "../controllers/productsController";

const productsRouter = express.Router();

// /api/products
// public
productsRouter.route("/").get(getProducts);

// @ GET SINGLE PRODUCT
// @ /api/products/product/:id
productsRouter.route("/product/:id").get(getProduct);

// @ GET PRODUCTS ON SALE
// @ /api/products/onsale
productsRouter.route("/onsale").get(getProductsOnSale);

// @ GET FEATURED PRODUCTS
// @ /api/products/featured
productsRouter.route("/featured").get(getFeaturedProducts);

// @ GET TOP RATED PRODUCTS
// @ /api/products/toprated
productsRouter.route("/toprated").get(getFeaturedProducts);

// @ POST - CREATE REVIEW
// @ /api/products/product/:id/review
productsRouter.route("/product/:id/review").post(protect, createProductReview);

export default productsRouter;
