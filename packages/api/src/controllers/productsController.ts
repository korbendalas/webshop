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

// @ GET -  TOP RATED PRODUCTS
// /api/products/product/:id
// public

export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// @ CREATE PRODUCT REVIEW
// /api/products/product/:id/review
// public

export const createProductReview = asyncHandler(async (req: any, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);
  if (product) {
    //if user already reviewed product
    const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString());
    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    } else {
      const review = {
        comment,
        rating: Number(rating),
        user: req.user._id,
      };
      product.reviews.push(review); // add new review

      product.numOfReviews = product.reviews.length; // update number of reviews
      product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length; // create average rating

      await product.save();
      res.status(201).send({ message: "Review added." });
    }
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
