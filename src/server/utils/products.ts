import { faker } from "@faker-js/faker";
import { type UUID, randomUUID } from "crypto";

interface product {
  id: UUID;
  name: string;
  price: string;
  description: string;
}

// Function to generate a product
const generateProduct = (): product => {
  const productName = faker?.commerce?.productName();
  const productPrice = faker.commerce.price();
  const productDescription = faker.lorem.sentences();
  return {
    name: productName,
    price: productPrice,
    description: productDescription,
    id: randomUUID(),
  };
};

// Generate an array of 100 products
export const generateProducts = (numProducts: number) => {
  const products: product[] = [];
  for (let i = 0; i < numProducts; i++) {
    products.push(generateProduct());
  }
  return products;
};
