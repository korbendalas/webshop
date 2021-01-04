import { http } from "../http";

export async function onSaleProducts() {
  const response = await http.get("/api/products/onsale");

  return response;
}
