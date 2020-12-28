import { http } from "../http";
import Lockr from "lockr";

interface LoginVariables {
  email: string;
  password: string;
}

export async function loginMutation({ email, password }: LoginVariables) {
  const response = await http.post("/api/users/login", {
    email,
    password,
  });
  if (response?.data?.token) {
    Lockr.set("shop-token", `bearer ${response?.data?.token}`);
    Lockr.set("shop-user", response?.data?.user);
  }
  return response;
}
