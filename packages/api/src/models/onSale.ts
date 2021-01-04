import { model, Schema } from "mongoose";

const onSaleSchema: Schema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "product",
    },
    salePrice: { type: Number, default: 20, required: true },
  },
  { timestamps: true },
);

export const OnSale = model("onSale", onSaleSchema);
