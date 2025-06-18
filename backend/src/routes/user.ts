import { Router} from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { signupTypes,loginTypes } from "../types/user";
import { hashedPassword,comparePassword } from "../types/hashing";
const userRouter = Router();
const prisma = new PrismaClient();


userRouter.post("/signup",async(req,res)=>{
    const body = req.body;
    const {success} = signupTypes.safeParse(body);
    if(!success){
        console.log(body);
        res.status(400).json({
            message: "Incorrect Detail"
        })
        return;
    }
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
        const hashedPass = await hashedPassword(req.body.password);
        const user = await prisma.user.create({
            data: {
                phone: req.body.phone,
                name: req.body.name,
                password: hashedPass
               
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
    const body = req.body;
    const {success} = loginTypes.safeParse(body);
    if(!success){
        console.log(body);
        res.status(400).json({
            message: "Incorrect Detail"
        })
        return;
    }
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
        const hashedPassword = await comparePassword(req.body.password,user.password);
        if(!hashedPassword){
            res.status(401).json({
                message: "Invalid password"
            })
            return;
        }
        else{
            const token = jwt.sign({userId: user.id},JWT_SECRET);
            res.status(200).json({
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