import React from "react";
import { Button, Divider, Image, Input, Spinner } from "@chakra-ui/react";

export const ProductHero = ({ data }) => {
  return (
    <div className="flex">
      <div className="w-10/12 h-auto pb-3 px-5 ">
        <Image
          // boxSize="300px"
          // objectFit="cover"
          // style={{ width: "500px" }}
          fallback={
            <div style={{ width: 490 }} className="flex py-3 px-5 h-full items-center justify-center">
              <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" my="auto" />
            </div>
          }
          className="w-full h-full"
          src={data?.data?.img}
          alt="Segun Adebayo"
          // src={false}
        />
      </div>
      <div className="flex flex-col p-3 text-left w-full">
        <div className="text-sm font-base">{data?.data?.category}</div>
        <div className="text-2xl font-semibold">{data?.data?.name}</div>{" "}
        <div className="flex py-4">
          <div>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <div>number of reviews: {data?.data?.reviews.length}</div>
        </div>
        <div className="">
          <span className="">Availability:</span>
          <span className="text-green-400 font-bold px-1">{data?.data?.countInStock} in stock</span>
        </div>
        <Divider className="py-3" orientation="horizontal" />
        <div className="py-2">{data?.data?.description}</div>
        <div className="flex">
          <div className="text-4xl font-base py-3">$ {data?.data?.price}</div>
        </div>
        <div className="flex my-3">
          <Input borderRadius="3xl" size="lg" px="7" bg="white" className="w-2/6" placeholder="" />
          <Button
            className="mx-2 text-xs text-white bg-yellow-brand hover:bg-black"
            px={4}
            size="lg"
            borderRadius="3xl"
          >
            <span className="px-6 py-1">
              <i className="fas fa-shopping-cart mx-2"></i> Add to cart
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
