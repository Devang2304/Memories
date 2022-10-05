import express from "express";
import { getPosts,createPost } from "../controllers/posts.js";

const router = express.Router(); // creating the routers 

// this will reach by the https://localhost:5000/posts


// this will get executed when someone comes on the site
router.get('/',getPosts);
router.get('/',createPost);

export default router;

