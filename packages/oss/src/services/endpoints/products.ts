import { http } from "../http";

export async function getAllProducts() {
  const response = await http.get("/api/oss/products");
  return response;
}
