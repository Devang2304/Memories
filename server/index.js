import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app=express(); 

// using express middleware to connect this to server
app.use('/posts',postRoutes); // this will start with posts

app.use(bodyParser.json({ limit: "30mb",extended: true })); // we are setting the limit of the image storage that we going to send
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true })); //we setting the body parser to send hte proper request to the server
app.use(cors());

// To set the server we are going to use mongodb
//https://www.mongodb.org/cloud/atlas
//we are going to send our data to cloud database of the mongodb

const CONNECTION_URL="mongodb+srv://DEVANG23:sGS9G3qDgNVQztE@cluster0.ngb8lfk.mongodb.net/test";
const PORT=process.env.PORT || 5000; // creating the port for temperary viewing the website

mongoose.connect(CONNECTION_URL) // mongoose is a function connects the data to database with the given function
.then(()=>app.listen(PORT,()=>console.log(`server running on port : ${PORT}`))) // calling the app
.catch((error)=>console.log(error.message)); // if the connection to the database is unsuccessful then this will run
