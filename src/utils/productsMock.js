import { faker } from "@faker-js/faker";

const categories = [
  "mesas",
  "sillas",
  "bancos",
  "decoración",
  "almacenamiento",
  "textiles",
  "sofás",
];

export const generateProduct = () => {
  const randomCategoryIndex = Math.floor(Math.random() * categories.length);
  const randomCategory = categories[randomCategoryIndex];
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 50, max: 2500 }),
    img: faker.image.url(640, 480, undefined, true),
    stock: parseInt(faker.string.numeric({ min: 0, max: 500 })),
    code: faker.string.alphanumeric({ length: 8 }),
    status: faker.datatype.boolean(),
    category: randomCategory,
  };
};

// export const generateUser = () => {
//   const productsQuantity = parseInt(faker.string.numeric(5));
//   let products = [];
//   for (let i = 0; i < productsQuantity; i++) {
//     products.push(generateProduct());
//     return {
//       id: faker.database.mongodbObjectId(),
//       first_name: faker.person.firstName(),
//       last_name: faker.person.lastName(),
//       gender: faker.person.gender(),
//       email: faker.internet.email(),
//       products,
//     };
//   }
// };
