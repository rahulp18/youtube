import mongoose from "mongoose";

export const connectDataBase=async(url)=>{
      try {
       await mongoose.connect(url)
       console.log('Database Connected');
      } catch (error) {
        console.log(error);
      }
}