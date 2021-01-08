import { http } from "../http";

export async function onSaleProducts() {
  const response = await http.get("/api/products/onsale");

  return response;
}

//products/product/:id
export async function getSingleProduct({ id }) {
  const response = await http.get(`/api/products/product/${id}`);

  return response;
}
