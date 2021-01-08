import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSingleProduct } from "@app/services/endpoints/products";
import { ProductLeftSidebar } from "./productLeftSidebar";
import { MAX_WIDTH } from "@app/helpers/globals";
import classnames from "classnames";
import { Button, Divider, Image, Input, Spinner } from "@chakra-ui/react";
import { ProductHero } from "./productHero";
import { BottomTabs } from "@app/components/product/bottomTabs";

export const Product = () => {
  let { id } = useParams();
  const { data } = useQuery("singleProduct", () => getSingleProduct({ id }));
  console.log("product data", data);

  return (
    <div className="flex justify-center w-full">
      <div className={classnames("flex ", MAX_WIDTH)}>
        <ProductLeftSidebar />
        <div className="flex flex-col w-full">
          <ProductHero data={data} />
          <BottomTabs data={data} />
        </div>
      </div>
    </div>
  );
};
