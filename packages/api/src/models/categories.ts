import { model, Schema } from "mongoose";

const categoriesSchema: Schema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Categories = model("categories", categoriesSchema);
