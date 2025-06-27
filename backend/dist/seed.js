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
// Static images for food by name
const foodImageMap = {
    "Biryani": "https://as1.ftcdn.net/v2/jpg/06/08/84/24/1000_F_608842413_hdYadp6uSC7c7pq6LJew9s8gPnRSgjln.jpg?auto=compress&cs=tinysrgb&w=800",
    "Paneer Butter Masala": "https://as1.ftcdn.net/v2/jpg/07/07/16/16/1000_F_707161627_ZcREXZTdnUiXwfuDSpVsXhQPle51FhqE.jpg?auto=compress&cs=tinysrgb&w=800",
    "Masala Dosa": "https://as1.ftcdn.net/v2/jpg/13/85/64/54/1000_F_1385645441_wyPSes3tqGwEe35u9Cx564qmf3YPwQS0.jpg?auto=compress&cs=tinysrgb&w=800",
    "Chole Bhature": "https://as2.ftcdn.net/v2/jpg/05/97/41/05/1000_F_597410510_aVWxjkToHzErUYm3Ammrvm4od2Fjxl1w.jpg?auto=compress&cs=tinysrgb&w=800",
    "Pav Bhaji": "https://images.pexels.com/photos/17433352/pexels-photo-17433352.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Rajma Chawal": "https://as2.ftcdn.net/v2/jpg/15/20/15/93/1000_F_1520159309_tqUwdk4YzuebhkcWpXiDGfZXnKmNG9vD.jpg?auto=compress&cs=tinysrgb&w=800",
    "Tandoori Chicken": "https://as1.ftcdn.net/v2/jpg/06/34/46/16/1000_F_634461641_Gp3B9RPLylazpLqSQXHfelAYYQB0saTa.jpg?auto=compress&cs=tinysrgb&w=800",
    "Dal Makhani": "https://as2.ftcdn.net/v2/jpg/14/79/47/41/1000_F_1479474136_8LvtTPnK6t8BfiEsyd3z6YbYC5BooX4V.jpg?auto=compress&cs=tinysrgb&w=800",
    "Butter Chicken": "https://as1.ftcdn.net/v2/jpg/15/11/16/86/1000_F_1511168635_ObXfUUOlk8gqNVBrWrR18rpgrn7RC24L.jpg?auto=compress&cs=tinysrgb&w=800",
    "Idli Sambar": "https://as1.ftcdn.net/v2/jpg/04/65/28/88/1000_F_465288827_zBiEkbK8VxEspw2DY2sKMN4U6hgCpIDN.jpg?auto=compress&cs=tinysrgb&w=800",
    "Pani Puri": "https://as2.ftcdn.net/v2/jpg/09/62/67/09/1000_F_962670904_DlOW694zymK9XYzwGAWGMicv10rDqDrB.jpg?auto=compress&cs=tinysrgb&w=800",
    "Momos": "https://as2.ftcdn.net/v2/jpg/02/24/72/23/1000_F_224722310_cn54s5uFVw9pQrIxrJRG2nBkY9PGHT9k.jpg?auto=compress&cs=tinysrgb&w=800",
    "Kadhai Paneer": "https://as1.ftcdn.net/v2/jpg/04/02/96/22/1000_F_402962231_TbPAibnctZANLL506DvDVbwZCEso5RXO.jpg?auto=compress&cs=tinysrgb&w=800",
    "Dhokla": "https://as2.ftcdn.net/v2/jpg/10/41/99/53/1000_F_1041995329_Y948A29Hru2TXn8JgkWMwJmIVauyQ9jq.jpg?auto=compress&cs=tinysrgb&w=800",
    "Fish Curry": "https://as2.ftcdn.net/v2/jpg/07/69/37/65/1000_F_769376510_Wko9XpBrMmkPtB0Ev42eeIzPlBiA784b.jpg?auto=compress&cs=tinysrgb&w=800",
    "Aloo Paratha": "https://as2.ftcdn.net/v2/jpg/13/15/09/81/1000_F_1315098180_12QTR2xJDG9faXUk1NNihvPwF7ty4gkP.jpg?auto=compress&cs=tinysrgb&w=800",
    "Vada Pav": "https://as1.ftcdn.net/v2/jpg/12/87/32/18/1000_F_1287321810_VoSjOO3WemnkgQLReCl29zqfw0bacleM.jpg?auto=compress&cs=tinysrgb&w=800",
    "Chicken 65": "https://as2.ftcdn.net/v2/jpg/04/35/23/97/1000_F_435239702_7gAHtmdGovPW2yuzKwnFlsZhYQrsgEOe.jpg?auto=compress&cs=tinysrgb&w=800",
    "Misal Pav": "https://as1.ftcdn.net/v2/jpg/12/43/74/66/1000_F_1243746646_1b7Y3q2nILGQ4x7ixT1ja5LZhqFnzVpo.jpg?auto=compress&cs=tinysrgb&w=800",
    "Kathi Roll": "https://as2.ftcdn.net/v2/jpg/12/32/74/05/1000_F_1232740534_EXK9cA9xpYZ2pGmM5NJkPigFsei4H3SP.jpg?auto=compress&cs=tinysrgb&w=800"
};
const restaurantPrefixes = ["Swaad", "Annapurna", "Tandoori", "Mirch Masala", "Biryani", "Maharaja", "Zaika", "Spice", "Desi", "Royal"];
const restaurantSuffixes = ["Dhaba", "Bhojanalaya", "Restaurant", "Cafe", "House", "Point", "Kitchen", "Palace", "Hut", "Corner"];
const indianFirstNames = ["Rahul", "Priya", "Amit", "Sneha", "Ravi", "Pooja", "Suresh", "Anjali", "Vikram", "Neha"];
const indianLastNames = ["Sharma", "Verma", "Reddy", "Patel", "Yadav", "Kumar", "Joshi", "Iyer", "Thakur", "Das"];
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
            const foodItems = yield Promise.all(foodList.map((food) => {
                var _a;
                return prisma.food.create({
                    data: {
                        name: food.name,
                        description: food.description,
                        image: (_a = foodImageMap[food.name]) !== null && _a !== void 0 ? _a : faker_1.faker.image.urlPicsumPhotos({ width: 400, height: 300 }) // fallback
                    }
                });
            }));
            console.log("🏪 Creating restaurants...");
            for (let i = 0; i < 50; i++) {
                const restaurant = yield prisma.restaurant.create({
                    data: {
                        name: getIndianRestaurantName(),
                        address: faker_1.faker.location.streetAddress(),
                        ownerName: getIndianFullName(),
                        contact: faker_1.faker.string.numeric(10),
                        image: faker_1.faker.image.urlPicsumPhotos({ width: 400, height: 300 }) // unique image
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
            console.log("✅ Seed completed with images.");
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
