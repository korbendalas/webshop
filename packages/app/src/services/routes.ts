import { Homepage, MyAccount } from "@app/pages";
import { Product } from "@app/components/product/product";

export const routes = [
  { path: "/", name: "Home", Component: Homepage },
  { path: "/me", name: "My Account ", Component: MyAccount },
  { path: "/product/:id", name: "Product", Component: Product },
];
