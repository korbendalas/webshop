import { Document, model, Schema } from "mongoose";

const reviewSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true },
);

export interface ProductDocument extends Document {
  name: { type: string };
  email: { type: string };
  password: { type: string };
  isAdmin?: { type: boolean };
}

export interface ProductDocument extends Document {
  user: {
    type: any;
  };
  name: { type: string };
  img: { type: string; unique: false };
  brand: { type: string };
  category: { type: string };
  description: { type: string };
  reviews: any;
  rating: { type: number };
  numOFReviews: { type: number };
  price: { type: number };
  countInStock: { type: number };
}

const specificationsSchema: Schema = new Schema({
  brand: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "brand",
  },
  height: {
    value: { type: String, required: false },
    title: { type: String, required: false, defaultValue: "Height" },
  },
  width: { value: { type: String, required: false }, title: { type: String, required: false, defaultValue: "Width" } },
  screenSize: {
    value: { type: String, required: false },
    title: { type: String, required: false, defaultValue: "Screen size" },
  },
  weight: { type: Number, required: false, title: "Weight" },
  modelNumber: { type: String, required: false, title: "Model number" },
});

const productSchema: Schema = new Schema(
  {
    // user: {
    //   type: Schema.Types.ObjectId,
    //   required: true,
    //   ref: "user",
    // },
    name: { type: String, required: false },
    img: { type: String },
    brand: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "brand",
    },
    category: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, default: 0 },
    numOfReviews: { type: Number, default: 0 },
    price: { type: Number, required: true },
    countInStock: { type: Number, default: 0 },
    onSale: {
      type: Boolean,
      default: false,
    },
    salePrice: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    // specifications: [specificationsSchema],
  },
  { timestamps: true },
);

export const Product = model<ProductDocument>("product", productSchema);
