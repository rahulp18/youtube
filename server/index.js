import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
 import mongoose from 'mongoose';
 import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import videoRouter from './routes/videos.js';
import commentRouter from './routes/comments.js';
dotenv.config();

const app=express();
const PORT=process.env.PORT;
// Connect Database

const connect=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to database");
    }).catch((err)=>{
        throw err;
    })
}


// Middleware

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/videos',videoRouter);
app.use('/api/comments',commentRouter);
// Error handler

app.use((err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message || "Something went Wrong !";
    return res.status(status).json({
        success:false,
        status,
        message,
    });
});

 
app.listen(PORT,()=>{
    connect();
    console.log(`server is running at port ${PORT}`);
});

