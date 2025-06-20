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
const client_1 = require("@prisma/client");
const express_1 = require("express");
const foodRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
foodRouter.get("/getAllFood", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let response;
        if (req.query.search) {
            const searchQuery = req.query.search.toString();
            response = yield prisma.food.findMany({
                where: {
                    name: {
                        contains: searchQuery,
                        mode: 'insensitive'
                    }
                }
            });
            res.status(200).json({
                response: response
            });
        }
        else {
            response = yield prisma.food.findMany();
            res.status(200).json({
                foods: response
            });
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}));
foodRouter.get("/:id/restaurant", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodId = Number(req.params.id);
    try {
        const restaurant = yield prisma.restaurantFood.findMany({
            where: {
                foodId
            },
            include: {
                restaurant: true,
                food: true
            }
        });
        res.json(restaurant.map(rf => ({
            restaurantId: rf.restaurant.id,
            name: rf.restaurant.name,
            price: rf.price
        })));
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}));
foodRouter.get("/allRestaurants", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rest = yield prisma.restaurant.findMany();
        if (rest) {
            res.status(200).json({
                restaurants: rest
            });
        }
    }
    catch (e) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}));
exports.default = foodRouter;
