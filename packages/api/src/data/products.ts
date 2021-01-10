import faker from "faker";
import { range } from "lodash";

export const productsSeed = range(100).map(item => {
  let i = 0;
  return {
    name: faker.commerce.productName(),

    // img: `${faker.image.cats()}?random=${Math.round(Math.random() * 1000)}`,
    img: "/uploads/images/kosarkas.jpg",
    description: faker.commerce.productDescription(),
    brand: faker.company.companyName(),
    category: "Electronics",
    price: 89.99,
    countInStock: Math.floor(Math.random() * 200),
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * 131),
    onSale: faker.random.boolean(),
    salePrice: Math.floor(Math.random() * 200),
    featured: faker.random.boolean(),
  };
});

export const brandSeed = [
  { brand: "Apple" },
  { brand: "Samsung" },
  { brand: "Xiaomi" },
  { brand: "Huawei" },
  { brand: "Tesla" },
];
