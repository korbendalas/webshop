import express from "express";
import { getProduct, getProducts } from "../controllers/productsController";

const productsRouter = express.Router();

// /api/products
// public
productsRouter.route("/").get(getProducts);

// @ GET SINGLE PRODUCT
// @ /api/product/:id
productsRouter.route("/:id").get(getProduct);

export default productsRouter;
