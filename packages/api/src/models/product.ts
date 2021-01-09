import { Document, model, Schema } from "mongoose";

const reviewSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
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

const productSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    name: { type: String, required: true },
    img: { type: String },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numOFReviews: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    onSale: {
      type: Boolean,
      default: false,
    },
    salePrice: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Product = model<ProductDocument>("product", productSchema);
