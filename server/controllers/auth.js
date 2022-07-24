import bcrypt from 'bcryptjs'
import { CreateError } from '../error.js';
import User from '../models/User.js'
import jwt from 'jsonwebtoken';

export const signup=async(req,res,next)=>{
    try {
        const salt=bcrypt.genSaltSync(10);
        const hashPassword=bcrypt.hashSync(req.body.password,salt);
        
        const newUser=new User({...req.body,password:hashPassword});
    
       await newUser.save();
       res.status(200).json(newUser);

    } catch (error) {
        next(error);
    }
}

export const signin=async(req,res,next)=>{
    try {
        const user=await User.findOne({email:req.body.email})
        if(!user) return next(CreateError(400,"User not found"));

        const isCorrect=await bcrypt.compare(req.body.password,user.password);
        
        if(!isCorrect) return next(CreateError(404,"Invalid Credentials"));
    
        const token= jwt.sign({id:user._id},process.env.JWT);
        
        const {password,...others}=user._doc;

        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).json(others);


 

    } catch (error) {
        next(error);
    }
}

