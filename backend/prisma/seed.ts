// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 1. Create 15 Food items (these are the master items)
  const foodItems = await Promise.all(
    Array.from({ length: 15 }).map(() => {
      return prisma.food.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription()
        }
      });
    })
  );

  // 2. Create 50 restaurants
  for (let i = 0; i < 50; i++) {
    const restaurant = await prisma.restaurant.create({
      data: {
        name: faker.company.name(),
        address: faker.location.streetAddress(),
        ownerName: faker.person.fullName(),
        contact: faker.string.numeric(10),
      },
    });

    // Assign 5 to 10 random foods from the master list with random prices
    const shuffledFoods = faker.helpers.shuffle(foodItems).slice(0, faker.number.int({ min: 5, max: 10 }));

    await Promise.all(
      shuffledFoods.map((food) => {
        return prisma.restaurantFood.create({
          data: {
            restaurantId: restaurant.id,
            foodId: food.id,
            price: parseFloat(faker.commerce.price({ min: 50, max: 500, dec: 0 })),
          },
        });
      })
    );
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error("Error while seeding:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
