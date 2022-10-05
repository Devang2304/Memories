// created this to setup the backend setup properly
// creating handlers for the routes we are goint to create

import PostMessage from "../models/postMessage.js";


export const getPosts=async (req,res)=>{ 
    try {
        const postMessages= await PostMessage.find();// this will find the post form the PostMessage.js of the model

        res.status(200).json(postMessages); // status means everything is working & will send the data we have in the form of json file
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

//implementing the logic to creating or adding a new post
export const createPost=async (req,res)=>{
    const post = req.body;

    const newPost =  new PostMessage(post);
    try {
        await newPost.save(); // savinf the new post
        res.status(201).json(newPost);
        
    } catch (error) {
        res.status(409).json({message:error.message});
    }
};