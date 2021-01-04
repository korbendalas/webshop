import { model, Schema } from "mongoose";

const featuredSchema: Schema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "product",
    },
  },
  { timestamps: true },
);

export const Featured = model("featured", featuredSchema);
