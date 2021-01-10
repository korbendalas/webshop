import React from "react";
import { Button, Divider, Image, Input, Spinner, Text } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SidebarProduct = () => {
  return (
    <div className="flex my-5">
      <div className="w-24">
        <Image
          // boxSize="30px"
          // objectFit="cover"
          // style={{ width: "500px" }}
          fallback={
            <div className="flex py-3 px-5 h-full items-center justify-center">
              <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="sm" my="auto" />
            </div>
          }
          className="w-full h-full pr-5"
          src={"https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GoldPhone-300x300.jpg"}
          alt="Segun Adebayo"
          // src={false}
        />
      </div>
      <div className="flex flex-col items-start">
        <Link
          to={
            {
              // pathname: `/product/${id}`,
            }
          }
        >
          <div className="flex flex-col items-start">
            <p className="text-sm  font-light">Product name</p>
          </div>
        </Link>
        <ReactStars
          count={5}
          value={4}
          // onChange={ratingChanged}
          size={14}
          activeColor="#ffd700"
          edit={false}
        />
        <Text color="black.500" fontSize="md">
          $ 1,200
        </Text>
      </div>
    </div>
  );
};

export const ProductLeftSidebar = () => {
  return (
    <div className="p-3  h-hull font-bold w-80">
      <div className="w-full">
        <p className="text-left text-xl py-3 font-light">Latest products</p>
        <div className="w-full py-1 flex items-end">
          <div className="w-5/12 border-yellow-brand border-2 border-b" />
          <div className="w-full border-gray-300 border-b" />
        </div>
      </div>

      <SidebarProduct />
      <SidebarProduct />
      <SidebarProduct />
      <SidebarProduct />
    </div>
  );
};
