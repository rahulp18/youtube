import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDataBase } from './database/connectDB.js';

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT;
connectDataBase(process.env.MONGO_URI);
app.listen(PORT,()=>console.log(`Server is listing on the server ${PORT}`));
