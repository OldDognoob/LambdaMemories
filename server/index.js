import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';


import postRoutes from './routes/posts.js';


const app = express();

//every route here will gonna start with post
app.use('/posts', postRoutes);

//general set up
app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true}));
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://lambdamemories:lambdamemories7783@cluster0.oqdtx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//setting up mongoose: take a functions with two arguments.
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

  mongoose.set('useFindAndModify', false);
//https://www.mongodb.com/cloud/atlas
