// src/seed.ts
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

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
const foodImageMap: Record<string, string> = {
  "Biryani":        "https://as1.ftcdn.net/v2/jpg/06/08/84/24/1000_F_608842413_hdYadp6uSC7c7pq6LJew9s8gPnRSgjln.jpg?auto=compress&cs=tinysrgb&w=800",
  "Paneer Butter Masala": "https://as1.ftcdn.net/v2/jpg/07/07/16/16/1000_F_707161627_ZcREXZTdnUiXwfuDSpVsXhQPle51FhqE.jpg?auto=compress&cs=tinysrgb&w=800",
  "Masala Dosa":    "https://as1.ftcdn.net/v2/jpg/13/85/64/54/1000_F_1385645441_wyPSes3tqGwEe35u9Cx564qmf3YPwQS0.jpg?auto=compress&cs=tinysrgb&w=800",
  "Chole Bhature":  "https://as2.ftcdn.net/v2/jpg/05/97/41/05/1000_F_597410510_aVWxjkToHzErUYm3Ammrvm4od2Fjxl1w.jpg?auto=compress&cs=tinysrgb&w=800",
  "Pav Bhaji":      "https://images.pexels.com/photos/17433352/pexels-photo-17433352.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Rajma Chawal":   "https://as2.ftcdn.net/v2/jpg/15/20/15/93/1000_F_1520159309_tqUwdk4YzuebhkcWpXiDGfZXnKmNG9vD.jpg?auto=compress&cs=tinysrgb&w=800",
  "Tandoori Chicken": "https://as1.ftcdn.net/v2/jpg/06/34/46/16/1000_F_634461641_Gp3B9RPLylazpLqSQXHfelAYYQB0saTa.jpg?auto=compress&cs=tinysrgb&w=800",
  "Dal Makhani":    "https://as2.ftcdn.net/v2/jpg/14/79/47/41/1000_F_1479474136_8LvtTPnK6t8BfiEsyd3z6YbYC5BooX4V.jpg?auto=compress&cs=tinysrgb&w=800",
  "Butter Chicken": "https://as1.ftcdn.net/v2/jpg/15/11/16/86/1000_F_1511168635_ObXfUUOlk8gqNVBrWrR18rpgrn7RC24L.jpg?auto=compress&cs=tinysrgb&w=800",
  "Idli Sambar":    "https://as1.ftcdn.net/v2/jpg/04/65/28/88/1000_F_465288827_zBiEkbK8VxEspw2DY2sKMN4U6hgCpIDN.jpg?auto=compress&cs=tinysrgb&w=800",
  "Pani Puri":      "https://as2.ftcdn.net/v2/jpg/09/62/67/09/1000_F_962670904_DlOW694zymK9XYzwGAWGMicv10rDqDrB.jpg?auto=compress&cs=tinysrgb&w=800",
  "Momos":          "https://as2.ftcdn.net/v2/jpg/02/24/72/23/1000_F_224722310_cn54s5uFVw9pQrIxrJRG2nBkY9PGHT9k.jpg?auto=compress&cs=tinysrgb&w=800",
  "Kadhai Paneer":  "https://as1.ftcdn.net/v2/jpg/04/02/96/22/1000_F_402962231_TbPAibnctZANLL506DvDVbwZCEso5RXO.jpg?auto=compress&cs=tinysrgb&w=800",
  "Dhokla":         "https://as2.ftcdn.net/v2/jpg/10/41/99/53/1000_F_1041995329_Y948A29Hru2TXn8JgkWMwJmIVauyQ9jq.jpg?auto=compress&cs=tinysrgb&w=800",
  "Fish Curry":     "https://as2.ftcdn.net/v2/jpg/07/69/37/65/1000_F_769376510_Wko9XpBrMmkPtB0Ev42eeIzPlBiA784b.jpg?auto=compress&cs=tinysrgb&w=800",
  "Aloo Paratha":   "https://as2.ftcdn.net/v2/jpg/13/15/09/81/1000_F_1315098180_12QTR2xJDG9faXUk1NNihvPwF7ty4gkP.jpg?auto=compress&cs=tinysrgb&w=800",
  "Vada Pav": "https://as1.ftcdn.net/v2/jpg/12/87/32/18/1000_F_1287321810_VoSjOO3WemnkgQLReCl29zqfw0bacleM.jpg?auto=compress&cs=tinysrgb&w=800",
  "Chicken 65":     "https://as2.ftcdn.net/v2/jpg/04/35/23/97/1000_F_435239702_7gAHtmdGovPW2yuzKwnFlsZhYQrsgEOe.jpg?auto=compress&cs=tinysrgb&w=800",
  "Misal Pav":      "https://as1.ftcdn.net/v2/jpg/12/43/74/66/1000_F_1243746646_1b7Y3q2nILGQ4x7ixT1ja5LZhqFnzVpo.jpg?auto=compress&cs=tinysrgb&w=800",
  "Kathi Roll":     "https://as2.ftcdn.net/v2/jpg/12/32/74/05/1000_F_1232740534_EXK9cA9xpYZ2pGmM5NJkPigFsei4H3SP.jpg?auto=compress&cs=tinysrgb&w=800"
};

const restaurantPrefixes = ["Swaad", "Annapurna", "Tandoori", "Mirch Masala", "Biryani", "Maharaja", "Zaika", "Spice", "Desi", "Royal"];
const restaurantSuffixes = ["Dhaba", "Bhojanalaya", "Restaurant", "Cafe", "House", "Point", "Kitchen", "Palace", "Hut", "Corner"];
const indianFirstNames = ["Rahul", "Priya", "Amit", "Sneha", "Ravi", "Pooja", "Suresh", "Anjali", "Vikram", "Neha"];
const indianLastNames = ["Sharma", "Verma", "Reddy", "Patel", "Yadav", "Kumar", "Joshi", "Iyer", "Thakur", "Das"];

const getIndianRestaurantName = () =>
  `${faker.helpers.arrayElement(restaurantPrefixes)} ${faker.helpers.arrayElement(restaurantSuffixes)}`;

const getIndianFullName = () =>
  `${faker.helpers.arrayElement(indianFirstNames)} ${faker.helpers.arrayElement(indianLastNames)}`;
const restaurantImages = [
  "https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/07/09/99/22/1000_F_709992219_DuQy0C8kd8striX8UhOGq7EKnnovXObA.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/01/70/46/26/1000_F_170462661_DucnHuvtx7eGvwnBJmNjW3CvKUGONpvQ.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/02/15/80/15/1000_F_215801521_FDalXXKSINSSYggI84xLjVHCgZdIMCcS.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/empty-tables-and-chairs-outside-a-restaurant-decorated-with-wooden-bars-and-electric-light-bulbs/302716168?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/02/38/10/52/1000_F_238105207_2jrGVrP5mtzB0LFYJJoZIrI09xy7wHDp.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/01/41/22/95/1000_F_141229583_byrOoszVFz2MzCHHv87nAH4ouKwF2PVU.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/new-and-clean-luxury-restaurant-in-european-style/341392574?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/06/73/20/82/1000_F_673208292_jKD7NQ2brHkDdXsz2tdu63jNBr3EXqgm.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/02/50/44/54/1000_F_250445443_KYQbaCkwqRknA0jt792ywRLNJxEktlu3.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/03/26/25/82/1000_F_326258299_yaJCqZbSumTaPxDnIRxoF3napDsoF5v3.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/06/58/90/08/1000_F_658900827_TyTWyCAX0HbPYNx0R5DGpvns5prBWcP4.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/07/06/67/31/1000_F_706673109_H1toBS4NaCmwn9LihFFc16cwPPMNpP3r.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/02/03/70/02/1000_F_203700200_RWVHuMGjQOs2TeYdRwqwvJVnYfQruTsB.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/01/93/93/82/1000_F_193938213_Oit1FgtLnfu6gKMucGBwqXcSLk75TYph.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/07/01/66/99/1000_F_701669909_Jq47V7MGvb5MN5T9g6znEyTr1xRZTKQF.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/06/18/58/67/1000_F_618586765_CFy4IlTj38WLxbmAqhWp8YEngs2THYke.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/03/20/50/31/1000_F_320503111_AkPfl6llysU9c54RlAUGm4gqYIkBoZZo.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/01/32/95/52/1000_F_132955296_aVw8aK5f62WKpaFuY27nyaVOYPBRmpTC.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/01/98/80/73/1000_F_198807360_bJvOBhdqj3tYvr95G8qZfrLJKR3SBVqd.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/01/45/69/35/1000_F_145693503_MmiPtBgrn5V5T8XIZ2bwgSYMQNTP3wNG.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/01/58/59/73/1000_F_158597362_wQANCNlUIgSLk7snVb07YHaZyWqqRvAD.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/02/33/74/62/1000_F_233746299_gq9rmceTpxber3Pr3Tg7ky49BHt12cHY.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/03/34/42/23/1000_F_334422311_XKEZRnVQD1LQsQNDEMIjBLgw3w75cv4z.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/05/75/74/38/1000_F_575743878_yMxzpNrZk2ClPkyWGZ1WeVWPTvt1MLb9.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/02/54/02/21/1000_F_254022179_u4EYIlmOZ39YJpXqd0DgdxM9umJoW7JH.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/02/34/02/49/1000_F_234024942_ZSVggmbyzmg2D797HeRwyRQfO1ErCc7b.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/04/48/87/11/1000_F_448871166_SMCfZiOYydUfuFLnoYUhOQanCXwKPHwX.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as2.ftcdn.net/v2/jpg/01/45/67/27/1000_F_145672772_DYwh7BSsZNFwvkQQTalPLU90CgeoxT00.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/02/35/67/80/1000_F_235678070_VtLVld2I43cfHABrYOuh95CEZb3r8sxU.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/02/72/00/34/1000_F_272003468_gDz8rZAU5ySM5sVtuTADqpFuhSqLQDGx.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/02/73/05/92/1000_F_273059237_f1aOrVFVKl6nlpymHe47pA211eTE5h9b.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/01/25/86/06/1000_F_125860696_0XJJmVjuT4F2VWnOa7X63Qe95b9mLQuC.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://as1.ftcdn.net/v2/jpg/00/63/16/38/1000_F_63163814_jlLfMnOdBmdbU6YeXMcpK8KMKriIEQzn.jpg?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/interiors-of-luxury-upscale-restaurant/159041590?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/restaurant-with-open-kitchen/112267066?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/3d-render-luxury-restaurant-interior/250540117?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/retro-wooden-loft-caffee-restaurant/157850291?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/cozy-wooden-interior-of-restaurant-copy-space/170462869?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/interior-of-cozy-modern-restaurant-with-a-bar-counter-and-lamp-lighting/533266332?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/interior-of-spacious-light-contemporary-restaurant-with-big-windows-decorated-with-exotic-plants-and-cozy-chairs-at-tables-under-creative-pendant-lamps/356522041?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/a-modern-restaurant-with-unique-wood-furniture-and-plant/753602554?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/minsk-belarus-may-2020-banquet-hall-with-table-and-appliances-in-elite-luxury-restaurant/447309841?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/bright-blur-coffee-shop-with-people-in-walking-in-blurred-motion-in-coffee-shop-space/669395510?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/restaurant-interior/171828898?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/tables-and-chairs-in-modern-bar-and-restaurant/118360585?auto=compress&cs=tinysrgb&w=800",
  "https://stock.adobe.com/in/images/elegant-interior-of-restaurant-with-sleek-furniture-and-flooring/612936432?auto=compress&cs=tinysrgb&w=800"
];
async function seed() {
  try {
    console.log("🌱 Clearing old data...");
    await prisma.restaurantFood.deleteMany();
    await prisma.restaurant.deleteMany();
    await prisma.food.deleteMany();

    console.log("🍽️ Creating food items...");
    const foodItems = await Promise.all(
      foodList.map((food) =>
        prisma.food.create({
          data: {
            name: food.name,
            description: food.description,
            image: foodImageMap[food.name] ?? faker.image.urlPicsumPhotos({ width: 400, height: 300 }) // fallback
          }
        })
      )
    );

    console.log("🏪 Creating restaurants...");
    for (let i = 0; i < 50; i++) {
      const restaurant = await prisma.restaurant.create({
        data: {
          name: getIndianRestaurantName(),
          address: faker.location.streetAddress(),
          ownerName: getIndianFullName(),
          contact: faker.string.numeric(10),
          image: restaurantImages[i] // unique image
        }
      });

      const itemsToAdd = faker.helpers.arrayElements(foodItems, faker.number.int({ min: 5, max: 10 }));

      await Promise.all(
        itemsToAdd.map((food) =>
          prisma.restaurantFood.create({
            data: {
              restaurant: { connect: { id: restaurant.id } },
              food: { connect: { id: food.id } },
              price: parseFloat(faker.commerce.price({ min: 100, max: 500 })),
              image: "https://as2.ftcdn.net/v2/jpg/12/32/74/05/1000_F_1232740534_EXK9cA9xpYZ2pGmM5NJkPigFsei4H3SP.jpg?auto=compress&cs=tinysrgb&w=800"
            }
          })
        )
      );
    }

    console.log("✅ Seed completed with images.");
  } catch (error) {
    console.error("❌ Seed failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
