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

// @get FEATURED PRODUCTS
// /api/products/featured
export async function getFeaturedProducts() {
  const response = await http.get(`/api/products/featured`);

  return response;
}
// @get TOP RATED
// /api/products/toprated
export async function getTopRatedProducts() {
  const response = await http.get(`/api/products/toprated`);

  return response;
}
