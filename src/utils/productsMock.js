import { faker } from "@faker-js/faker";

export const generateProduct = () => {
  return {
    id: faker.database.mongodbObjectId(),
    img: faker.image.url({ width: 10 }),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 50, max: 2500 }),
    stock: parseInt(faker.string.numeric()),
  };
};

export const generateUser = () => {
  const productsQuantity = parseInt(faker.string.numeric(5));
  let products = [];
  for (let i = 0; i < productsQuantity; i++) {
    products.push(generateProduct());
    return {
      id: faker.database.mongodbObjectId(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      gender: faker.person.gender(),
      email: faker.internet.email(),
      products,
    };
  }
};
