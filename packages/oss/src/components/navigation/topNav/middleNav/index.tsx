import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputRightAddon,
  Tag,
} from "@chakra-ui/react";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import { Link } from "react-router-dom";
import { MAX_WIDTH } from "../../../../helpers/globals";
import classnames from "classnames";

import { motion, Transition } from "framer-motion";

interface Props {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
  width?: string | number;
  onClick: () => void;
  height?: string | number;
}

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#000",
  transition = null,
  lineProps = null,
  ...props
}: Props) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
      <motion.line x1="0" x2={unitWidth} y1="2" y2="2" variants={center} {...lineProps} />
      <motion.line x1="0" x2={unitWidth} y1="4" y2="4" variants={bottom} {...lineProps} />
    </motion.svg>
  );
};

export const MiddleNav = () => {
  const user = useCurrentUser();
  const [drawer, setDrawer] = useState(false);
  const open = () => setDrawer(true);
  const close = () => setDrawer(false);
  return (
    <div className="text-sm ">
      <div className={classnames("flex justify-between items-center py-3 mx-auto", MAX_WIDTH)}>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center w-9/12">
            <Link
              className="mr-10"
              to={{
                pathname: "/",
              }}
            >
              HOMEPAGE
            </Link>
            <span className="mx-10">
              {" "}
              <MenuButton
                isOpen={drawer}
                onClick={() => (drawer ? close() : open())}
                strokeWidth="2"
                color="#000000"
                transition={{ ease: "easeOut", duration: 0.2 }}
                width={34}
                height={19}
                // style={menuButtonStyle}
              />
            </span>
            <div className="w-10/12">
              <Drawer placement={"left"} onClose={close} isOpen={drawer}>
                <DrawerOverlay>
                  <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
                    <DrawerBody>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </DrawerBody>
                  </DrawerContent>
                </DrawerOverlay>
              </Drawer>

              <InputGroup size="md">
                <Input
                  borderRadius="2xl"
                  borderColor="brand.yellow"
                  px="7"
                  bg="white"
                  placeholder="Search for Products"
                />
                <InputRightAddon bg="#333e48" color="white" borderRadius="2xl" children={"SignUp"} />
              </InputGroup>
            </div>
          </div>
          <div className="flex items-center justify-center w-64 text-xl font-bold ">
            <i className="far fa-heart mx-5"></i>
            <i className="far fa-user  mx-5 "></i>

            <span className="mx-5 flex items-center relative">
              <span className="absolute" style={{ top: 14, left: 12 }}>
                <Tag size="sm" bg="brand.yellow" borderRadius="full">
                  0
                </Tag>
              </span>
              <i className="fas fa-shopping-cart mr-5"></i> <span className="font-semibold ">$0,00</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
