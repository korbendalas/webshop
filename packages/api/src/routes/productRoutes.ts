import express from "express";
import asyncHandler from "express-async-handler";
import { Product } from "../models/product";
import { getProducts, getProduct, getProductsOnSale } from "../controllers/productsController";

const productsRouter = express.Router();

// /api/products
// public
productsRouter.route("/").get(getProducts);
// @ GET PRODUCTS ON SALE
// @ /api/products/onsale
productsRouter.route("/onsale").get(getProductsOnSale);

// @ GET SINGLE PRODUCT
// @ /api/products/product/:id
productsRouter.route("/product/:id").get(getProduct);

export default productsRouter;
