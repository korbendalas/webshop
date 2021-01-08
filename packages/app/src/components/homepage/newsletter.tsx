import React from "react";
import classnames from "classnames";
import { MAX_WIDTH } from "../../helpers/globals";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";

export const Newsletter = () => {
  return (
    <div className="bg-yellow-brand text-sm mt-64 flex flex justify-center items-center">
      <div className={classnames("flex items-center justify-between", MAX_WIDTH)}>
        {" "}
        <div className="flex items-center">
          <div className="flex items-center text-xl py-5 mr-10">
            <i className="far fa-paper-plane mr-5"></i>
            <p>Sign up to Newsletter</p>
          </div>
          <div className="mt-1">
            ...and receive <span className="font-bold">$20 coupon for first shopping</span>
          </div>
        </div>
        <div className="w-4/12">
          <InputGroup size="md">
            <Input borderRadius="2xl" px="7" bg="white" placeholder="Enter your email address" />
            <InputRightAddon bg="#333e48" color="white" borderRadius="2xl" children={"SignUp"} />
          </InputGroup>
        </div>
      </div>
    </div>
  );
};
