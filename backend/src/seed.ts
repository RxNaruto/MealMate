// src/seed.ts
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

// Custom Indian food items
const foodList = [
  { name: "Biryani", description: "Spiced rice with meat or vegetables" },
  { name: "Paneer Butter Masala", description: "Cottage cheese in creamy tomato gravy" },
  { name: "Masala Dosa", description: "Crispy dosa with spiced potato filling" },
  { name: "Chole Bhature", description: "Spicy chickpeas with fluffy fried bread" },
  { name: "Pav Bhaji", description: "Vegetable mash with buttered buns" },
  { name: "Rajma Chawal", description: "Kidney beans curry with rice" },
  { name: "Tandoori Chicken", description: "Marinated chicken roasted in a tandoor" },
  { name: "Dal Makhani", description: "Creamy black lentil curry" },
  { name: "Butter Chicken", description: "Creamy tomato chicken curry" },
  { name: "Idli Sambar", description: "Steamed rice cakes with lentil soup" },
  { name: "Pani Puri", description: "Crispy puris filled with spicy water" },
  { name: "Momos", description: "Steamed dumplings popular in the North-East" },
  { name: "Kadhai Paneer", description: "Paneer with capsicum and onion" },
  { name: "Dhokla", description: "Steamed gram flour cake from Gujarat" },
  { name: "Fish Curry", description: "Spicy fish cooked in coastal style" },
  { name: "Aloo Paratha", description: "Stuffed potato flatbread with butter" },
  { name: "Vada Pav", description: "Mumbai-style spicy potato burger" },
  { name: "Chicken 65", description: "Deep-fried spicy chicken from South India" },
  { name: "Misal Pav", description: "Spicy sprout curry with pav" },
  { name: "Kathi Roll", description: "Grilled filling wrapped in paratha" }
];

// Indian-sounding restaurant name parts
const restaurantPrefixes = [
  "Swaad", "Annapurna", "Tandoori", "Mirch Masala", "Biryani", "Maharaja", "Zaika", "Spice", "Desi", "Royal"
];
const restaurantSuffixes = [
  "Dhaba", "Bhojanalaya", "Restaurant", "Cafe", "House", "Point", "Kitchen", "Palace", "Hut", "Corner"
];

// Indian first and last names
const indianFirstNames = ["Rahul", "Priya", "Amit", "Sneha", "Ravi", "Pooja", "Suresh", "Anjali", "Vikram", "Neha"];
const indianLastNames = ["Sharma", "Verma", "Reddy", "Patel", "Yadav", "Kumar", "Joshi", "Iyer", "Thakur", "Das"];

// Helper to generate Indian-style names
const getIndianRestaurantName = () =>
  `${faker.helpers.arrayElement(restaurantPrefixes)} ${faker.helpers.arrayElement(restaurantSuffixes)}`;

const getIndianFullName = () =>
  `${faker.helpers.arrayElement(indianFirstNames)} ${faker.helpers.arrayElement(indianLastNames)}`;

async function seed() {
  try {
    console.log("🌱 Clearing old data...");
    await prisma.restaurantFood.deleteMany();
    await prisma.restaurant.deleteMany();
    await prisma.food.deleteMany();

    console.log("🍽️ Creating food items...");
    const foodItems = await Promise.all(
      foodList.map((food) =>
        prisma.food.create({ data: food })
      )
    );

    console.log("🏪 Creating restaurants...");
    for (let i = 0; i < 50; i++) {
      const restaurant = await prisma.restaurant.create({
        data: {
          name: getIndianRestaurantName(),
          address: faker.location.streetAddress(),
          ownerName: getIndianFullName(),
          contact: faker.string.numeric(10), // Simulated Indian 10-digit number
        }
      });

      const itemsToAdd = faker.helpers.arrayElements(foodItems, faker.number.int({ min: 5, max: 10 }));

      await Promise.all(
        itemsToAdd.map((food) =>
          prisma.restaurantFood.create({
            data: {
              restaurant: { connect: { id: restaurant.id } },
              food: { connect: { id: food.id } },
              price: parseFloat(faker.commerce.price({ min: 100, max: 500 }))
            }
          })
        )
      );
    }

    console.log("✅ Seed completed with Indian-style data.");
  } catch (error) {
    console.error("❌ Seed failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
