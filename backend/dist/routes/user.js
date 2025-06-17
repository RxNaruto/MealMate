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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const userRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield prisma.user.findFirst({
            where: {
                phone: req.body.phone
            }
        });
        if (existingUser) {
            res.json({
                message: "User already exist"
            });
            return;
        }
        const user = yield prisma.user.create({
            data: {
                phone: req.body.phone,
                name: req.body.name,
                password: req.body.password
            }
        });
        if (user) {
            const token = jsonwebtoken_1.default.sign({ userId: user.id }, config_1.JWT_SECRET);
            res.status(200).json({
                message: "User created Successfully",
                token: token
            });
            return;
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}));
userRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.user.findFirst({
            where: {
                phone: req.body.phone
            }
        });
        if (!user) {
            res.json({
                message: "user not found"
            });
            return;
        }
        if (user.password != req.body.password) {
            res.json({
                message: "invalid password"
            });
            return;
        }
        else {
            const token = jsonwebtoken_1.default.sign({ userId: user.id }, config_1.JWT_SECRET);
            res.json({
                message: "Sign in Successful",
                token: token
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server error"
        });
    }
}));
exports.default = userRouter;
