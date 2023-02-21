import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
const app =express();
app.use(bodyParser.json({limit:"30mb",extended :true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended :true}));
app.use(cors());
app.use('/posts',postRoutes);
const PORT =process.env.PORT || 5000;

const CONNECTION_URL = 'mongodb+srv://DEVANG23:sGS9G3qDgNVQztE@cluster0.ngb8lfk.mongodb.net/memories';
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to MongoDB successfully');
}).catch((err)=>{console.log('No connection')});
app.listen(PORT,()=>{
    console.log(`Listening to port http://localhost:${PORT}`);
})

app.get('/', (req, res)=>{
    res.send('Home');
});

