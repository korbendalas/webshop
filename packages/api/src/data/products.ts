import faker from "faker";
import { range } from "lodash";

export const productsSeed = range(100).map(item => {
  let i = 0;
  return {
    name: faker.commerce.productName(),
    img: faker.image.cats(),
    description: faker.commerce.productDescription(),
    brand: faker.company.companyName(),
    category: "Electronics",
    price: 89.99,
    countInStock: Math.floor(Math.random() * 200),
    rating: Math.floor(Math.random() * 6),
    numReviews: Math.floor(Math.random() * 131),
  };
});
