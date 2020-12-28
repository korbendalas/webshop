import React from "react";
import { Box } from "@chakra-ui/react";
import { YellowNav } from "./topNav/yellowNav";
import { MiddleNav } from "./topNav/middleNav";

export const TopNav = () => {
  return (
    <Box boxShadow="lg">
      <YellowNav />
      <MiddleNav />
    </Box>
  );
};
