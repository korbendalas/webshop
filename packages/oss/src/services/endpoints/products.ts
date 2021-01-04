import { http } from "../http";

export async function getAllProducts() {
  const response = await http.get("/api/oss/products");
  return response;
}

export async function deleteProduct({ id }: { id: string }) {
  const response = await http.delete(`/api/oss/products/product/${id}`);
  return response;
}

export async function getProduct({ id }: { id: string }) {
  const response = await http.get(`/api/oss/products/product/${id}`);
  return response;
}

export async function createProduct(product) {
  const response = await http.post(`/api/oss/products/product/`, product);
  return response;
}

export async function editProduct(product) {
  const response = await http.put(`/api/oss/products/product/:id`, product);
  return response;
}
