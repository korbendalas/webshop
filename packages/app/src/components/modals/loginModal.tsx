import React from "react";
import { DefaultModal } from "./defaultModal";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import { useMutation } from "react-query";
import { loginMutation } from "../../services/endpoints/auth";
import { Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import Lockr from "lockr";

type Props = { isOpen: boolean };

interface LoginInterface {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export const LoginModal = ({ isOpen }: Props) => {
  const toast = useToast();
  const dispatch = useDispatch<any>();

  const close = () => {
    return dispatch.ui.closeLoginPopup();
  };
  const { mutate: login, data: loginData } = useMutation(loginMutation, {
    onSuccess: async values => {
      if (values?.data?.token) {
        toast({
          position: "top-right",
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        dispatch.app.setUser(Lockr.get("shop-user") || null);
      }
      close();
    },
    onError: async (error, variables, context) => {
      toast({
        position: "top-right",
        title: "An error occurred.",
        //@ts-ignore
        description: error?.response?.data?.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
  });

  return (
    <DefaultModal isOpen={isOpen} close={close}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          login(values);
        }}
      >
        {props => (
          <Form className="p-2">
            <div className="p-4">
              <FormControl my="7" id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  borderRadius="3xl"
                  autoComplete="off"
                  placeholder="E-mail"
                  type="email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  name="email"
                />
              </FormControl>
              {props.errors.email && <div id="feedback">{props.errors.email}</div>}

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  borderRadius="3xl"
                  placeholder="Password"
                  autoComplete="off"
                  type="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  name="password"
                />
              </FormControl>
              {props.errors.password && <div id="feedback">{props.errors.password}</div>}

              <div className="flex justify-end">
                <Button
                  bg="brand.yellow"
                  colorScheme="yellow"
                  mt="7"
                  py="5"
                  type="submit"
                  borderRadius="3xl"
                  variant="solid"
                  hover="black"
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </DefaultModal>
  );
};
