import { http } from "../http";

export async function getAllProducts() {
  const response = await http.get("/api/oss/products");
  return response;
}

export async function deleteProduct({ id }: { id: string }) {
  const response = await http.delete(`/api/oss/products/${id}`);
  return response;
}
