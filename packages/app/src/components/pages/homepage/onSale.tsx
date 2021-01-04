import React from "react";
import { useQuery } from "react-query";
import { onSaleProducts } from "@app/services/endpoints/products";
import { ProductCard } from "@app/components/pages/homepage/productCard";

export const OnSale = () => {
  const { data } = useQuery("onSaleProducts", onSaleProducts);

  return (
    <div className="flex">
      {data?.data?.map(item => (
        <ProductCard img={item?.product?.img} salePrice={item?.salePrice} price={item?.product?.price} />
      ))}
    </div>
  );
};
