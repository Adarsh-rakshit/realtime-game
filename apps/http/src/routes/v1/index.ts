import { Router } from "express";

export const router = Router();

router.get("/signup", (req,res)=>{
    res.json({
        message:"hello signup"
    })
})

router.get("/signin", (req,res)=>{
    res.json({
        message:"hello signin"
    })
})

router.get("/elements",(req,res)=>{
    
})

router.get("/avatars",(req,res)=>{

})