import express from "express";
import { getProducts } from "../../controllers/oss/ossProductsController";

const ossProductRouter = express.Router();
// @ PRIVATE
// @ /api/users/profile

// /api/oss/products
// public
ossProductRouter.route("/").get(getProducts);

// @ GET SINGLE PRODUCT
// @ /api/product/:id
// ossProductRouter.route("/:id").get(getProduct);

export default ossProductRouter;
