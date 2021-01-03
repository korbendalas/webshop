import express from "express";
import { getProducts, deleteProduct } from "../../controllers/oss/ossProductsController";

const ossProductRouter = express.Router();

// /api/oss/products
// public
ossProductRouter.route("/").get(getProducts);

// @ DELETE SINGLE PRODUCT
// @ /api/oss/products/:id
ossProductRouter.route("/:id").delete(deleteProduct);

// @ GET SINGLE PRODUCT
// @ /api/product/:id
// ossProductRouter.route("/:id").get(getProduct);

export default ossProductRouter;
