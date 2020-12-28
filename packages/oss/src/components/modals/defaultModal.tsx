import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Button,
  MenuDivider,
  extendTheme,
  Flex,
  Spacer,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";

type Props = { children: any; close: () => void; isOpen: boolean; title?: string };

export const DefaultModal = ({ children, close, isOpen, title = null }: Props) => {
  return (
    <Modal onClose={close} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {/*<ModalFooter>*/}
        {/*  <Button onClick={close}>Close</Button>*/}
        {/*</ModalFooter>*/}
      </ModalContent>
    </Modal>
  );
};
