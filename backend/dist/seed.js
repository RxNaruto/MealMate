"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/seed.ts
const client_1 = require("@prisma/client");
const faker_1 = require("@faker-js/faker");
const prisma = new client_1.PrismaClient();
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
const getIndianRestaurantName = () => `${faker_1.faker.helpers.arrayElement(restaurantPrefixes)} ${faker_1.faker.helpers.arrayElement(restaurantSuffixes)}`;
const getIndianFullName = () => `${faker_1.faker.helpers.arrayElement(indianFirstNames)} ${faker_1.faker.helpers.arrayElement(indianLastNames)}`;
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("🌱 Clearing old data...");
            yield prisma.restaurantFood.deleteMany();
            yield prisma.restaurant.deleteMany();
            yield prisma.food.deleteMany();
            console.log("🍽️ Creating food items...");
            const foodItems = yield Promise.all(foodList.map((food) => prisma.food.create({ data: food })));
            console.log("🏪 Creating restaurants...");
            for (let i = 0; i < 50; i++) {
                const restaurant = yield prisma.restaurant.create({
                    data: {
                        name: getIndianRestaurantName(),
                        address: faker_1.faker.location.streetAddress(),
                        ownerName: getIndianFullName(),
                        contact: faker_1.faker.string.numeric(10), // Simulated Indian 10-digit number
                    }
                });
                const itemsToAdd = faker_1.faker.helpers.arrayElements(foodItems, faker_1.faker.number.int({ min: 5, max: 10 }));
                yield Promise.all(itemsToAdd.map((food) => prisma.restaurantFood.create({
                    data: {
                        restaurant: { connect: { id: restaurant.id } },
                        food: { connect: { id: food.id } },
                        price: parseFloat(faker_1.faker.commerce.price({ min: 100, max: 500 }))
                    }
                })));
            }
            console.log("✅ Seed completed with Indian-style data.");
        }
        catch (error) {
            console.error("❌ Seed failed:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
seed();
