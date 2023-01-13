import express from "express";
import { getPosts,createPosts } from "../controllers/posts.js";
const router=express.Router();

//creating controllers as we dont wanna create 
// complex logic here by creating lot of routes and make if
//hard to understand 
router.get('/',getPosts);
router.post('/',createPosts);

export default router;