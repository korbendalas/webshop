import express from "express";
import {
  getProducts,
  deleteProduct,
  createProduct,
  editProduct,
  getProduct,
} from "../../controllers/oss/ossProductsController";

const ossProductRouter = express.Router();

// GET ALL  /api/oss/products
// public
ossProductRouter.route("/").get(getProducts);

// @ CREATE PRODUCT
// POST  /api/oss/products/product
// public
ossProductRouter.route("/product").post(createProduct);

// @ GET SINGLE PRODUCT
// @ /api/product/product/:id

// @ DELETE SINGLE PRODUCT
// @ /api/oss/products/product/:id

// @ UPDATE SINGLE PRODUCT
// PUT /api/oss/products/product/:id
// public
ossProductRouter.route("/product/:id").get(getProduct).delete(deleteProduct).put(editProduct);

export default ossProductRouter;
