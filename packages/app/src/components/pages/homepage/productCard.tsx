import React, { useState } from "react";
import { Text, Button, Divider, Center, Badge, ScaleFade, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
const defaultImg = "https://unsplash.com/photos/PElJMFWV3kk/download?force=true&w=640";
export const ProductCard = ({ img = defaultImg, price = null, salePrice = null }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className=" flex justify-center items-center  w-auto mr-10">
      <div className="pb-3 rounded-lg  hover:shadow-lg my-2 bg-white">
        <div className="relative w-48 h-56 mb-3">
          {/*<img className=" rounded-t-lg w-full h-full"  alt="Profile picture" />*/}
          <Image className=" rounded-t-lg w-full h-full" boxSize="220px" src={img} alt="Profile picture" />

          <span className="absolute" style={{ top: "10px" }}>
            {" "}
            <Badge ml="1" colorScheme="yellow" variant="outline" fontSize="sm">
              Category
            </Badge>
          </span>
        </div>
        <div className="px-3">
          <div className="flex flex-col items-start">
            <Text color="blue.500" fontSize="lg">
              Product name
            </Text>
          </div>
          <div className="py-4 text-center flex  items-center justify-between ">
            <div className="flex flex-col items-start relative">
              <Text color="red.400" borderRadius="sm" py="1" fontSize="lg">
                $ 150,00
              </Text>
              {salePrice && (
                <Text color="gray.500" as="s" fontSize="sm">
                  $ {salePrice}
                </Text>
              )}
            </div>
            <Button borderRadius="md" _hover={{ bg: "brand.yellow" }} size="sm">
              <i className="fas fa-shopping-cart "></i>
            </Button>
          </div>
        </div>
      </div>

      {/*<Divider mx="5" borderWidth="1px" orientation="vertical" />*/}
    </motion.div>
  );
};
