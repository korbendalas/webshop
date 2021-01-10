import { Document, model, Schema } from "mongoose";

export interface BrandDocument extends Document {
  brand: { type: string };
}

const brandsSchema: Schema = new Schema(
  {
    brand: { type: String, required: true },
  },
  { timestamps: true },
);

export const Brands = model<BrandDocument>("brand", brandsSchema);
