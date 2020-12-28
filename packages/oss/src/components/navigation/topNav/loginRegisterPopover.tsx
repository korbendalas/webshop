import React from "react";
import {
  Button,
  Link as ChakraLink,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

export const LoginRegisterPopover = () => {
  const dispatch = useDispatch<any>();
  const open = () => {
    return dispatch.ui.openLoginPopup();
  };

  return (
    <Popover>
      <PopoverTrigger>
        <div className="text-sm cursor-pointer">
          <i className="far fa-user text-xs mr-2"></i>
          My Account
        </div>
      </PopoverTrigger>
      <Portal>
        <PopoverContent boxShadow="2xl" w="18rem" p={4}>
          <PopoverArrow />

          <PopoverCloseButton />
          <PopoverBody>
            <div className="flex flex-col items-center justify-center">
              <p className="text-xs">Returning customer?</p>
              <span className="w-auto text-xs">
                {" "}
                <Button
                  bg="brand.yellow"
                  colorScheme="yellow"
                  fontSize="12px"
                  fontWeight="semibold"
                  size="sm"
                  my="3"
                  py="3"
                  type="submit"
                  borderRadius="xl"
                  variant="solid"
                  hover="black"
                  onClick={open}
                >
                  Sign In
                </Button>
              </span>
            </div>
          </PopoverBody>
          <PopoverFooter>
            <div className="flex flex-col items-center justify-center">
              <p className="text-xs">Don't have an account?</p>
              <ChakraLink fontSize="12px" pt={3} fontWeight="semibold" color="blue.300">
                Register
              </ChakraLink>
            </div>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
