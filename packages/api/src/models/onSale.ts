import { model, Schema } from "mongoose";

const onSaleSchema: Schema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "order",
    },
  },
  { timestamps: true },
);

export const OnSale = model("onSale", onSaleSchema);
