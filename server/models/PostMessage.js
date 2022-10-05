import mongoose from 'mongoose';

// mongoose schema allows us to create a specific type of the document 
const postSchema = mongoose.Schema({

    title:String, 
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String, // converting the image into string
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
}); 
// now we have schema that we have to convert into models

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;
