import express from "express";

import User from "../models/user.js";

const router = express.Router();

router.post("/test-user" , async(req , res)=> {
    try {
        const {email , password} = req.body;

        const user = await User.create({
            email,
            password,
        })

        res.status(201).json({
            message:"User created successfully",
            user,
        })
    }catch (error) {
        res.status(500).json({
            message:"User creation failed",
            error:error.message,
        })
    }
})

export default router;