import { PrismaClient} from "@prisma/client";
import { Router } from "express";
import { idText, isForOfStatement } from "typescript";
const foodRouter = Router();

const prisma = new PrismaClient()

foodRouter.get("/getAllFood",async(req,res)=>{
    
    try {
        let response;
        if(req.query.search){
            const searchQuery = req.query.search.toString();
            response = await prisma.food.findMany({
                where: {
                    name: {
                        contains: searchQuery,
                        mode: 'insensitive'
                    }
                    
                }
            })
            res.status(200).json({
                response: response
            })
        }
        else{
            response = await prisma.food.findMany();
            res.status(200).json({
                foods: response
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
    
})

foodRouter.get("/:id/restaurant",async(req,res)=>{
    const foodId = Number(req.params.id);
   try {
     const restaurant = await prisma.restaurantFood.findMany({
         where:{
             foodId
         },
         include:{
             restaurant: true,
             food: true
         }
     });
     res.json(restaurant.map(rf=>({
         restaurantId: rf.restaurant.id,
         name: rf.restaurant.name,
         price: rf.price

     })))
   } catch (e) {
    console.log(e);
    res.status(500).json({
        message: "Internal Server Error"
    })
   }
})

foodRouter.get("/allRestaurants",async(req,res)=>{
    try {
        const rest = await prisma.restaurant.findMany();
        if(rest){
            res.status(200).json({
                restaurants: rest
            })
        }
    } catch (e) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

export default foodRouter;
