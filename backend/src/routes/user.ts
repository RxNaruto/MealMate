import { Router} from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
const userRouter = Router();
const prisma = new PrismaClient();


userRouter.post("/signup",async(req,res)=>{
    try {
        const existingUser = await prisma.user.findFirst({
            where:{
                phone: req.body.phone
            }
        })
        if(existingUser){
            res.json({
                message: "User already exist"
            })
            return;
        }
        const user = await prisma.user.create({
            data: {
                phone: req.body.phone,
                name: req.body.name,
                password: req.body.password
               
            }
        })
        if(user){
            const token = jwt.sign({userId: user.id},JWT_SECRET);
            res.status(200).json({
                message: "User created Successfully",
                token: token
            })
            return;
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
        
    }

})

userRouter.post("/login",async(req,res)=>{
    try {
        const user = await prisma.user.findFirst({
            where:{
                phone: req.body.phone
            }
        })
        if(!user){
            res.json({
                message: "user not found"
            })
            return;
        }
        if(user.password!=req.body.password){
            res.json({
                message: "invalid password"
            })
            return;
        }
        else{
            const token = jwt.sign({userId: user.id},JWT_SECRET);
            res.json({
                message: "Sign in Successful",
                token: token
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error"
        })
        
    }
})
export default userRouter;