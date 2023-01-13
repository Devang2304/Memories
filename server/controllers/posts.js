import postMessage from "../models/PostMessage.js";

export const getPosts =async (req, res)=>{
    try {
        const PostMessages = await postMessage.find();
        console.log(PostMessages);
        res.status(200).send(json(PostMessages));
    } catch (error) {
        res.status(404).send({message: error.message});
    }
}

export const createPosts =async (req, res)=>{
    const post =req.body;
    const newPost= new postMessage(post);
    try {
        await newPost.save();
        res.status(204).send(json(newPost));
    } catch (error) {
        res.status(409).send({message: error.message});
    }
}