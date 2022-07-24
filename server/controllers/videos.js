import User from "../models/User.js";
import Video from '../models/Video.js'
import { CreateError } from "../error.js";


export const addVideo=async(req,res,next)=>{
    const newVideo=await Video({userId:req.user.id,...req.body});
    try {
        const savedVideo=await newVideo.save();
        res.status(200).json(savedVideo);
    } catch (error) {
        next(error);
    };

};

export const updateVideo=async(req,res,next)=>{
    try {
        const video=await Video.findById(req.params.id);
        if(!video) return next(CreateError(404,"Video not found !"));
    
         if(req.user.id===video.userId){
            const updatedVideo=await Video.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{
                new:true
            });
            res.status(200).json(updatedVideo);
         }

    } catch (error) {
        next(error);
    }

}

// Delete video
export const deleteVideo=async(req,res,next)=>{
    try {
        const video=await Video.findById(req.params.id);
        if(!video) return next(CreateError(404,"Video not found"));
        if(req.user.id==video.userId){
            await Video.findByIdAndDelete(req.params.id);
            res.status(200).json("The video has been deleted !");
        } else{
            return next(CreateError(403,"You can delete only your video !"))

        }
    } catch (error) {
        next(error);
    }

}

// get video
export const getVideo=async(req,res,next)=>{
    try {
        const video=await Video.findById(req.params.id);
        res.status(200).json(video);
    } catch (error) {
        next(error);
    }

};

export const addView=async(req,res,next)=>{
    try {
        await Video.findByIdAndUpdate(req.params.id,{
            $inc:{views:1}
        });
        res.status(200).json("The vide has been increased")
    } catch (error) {
        next(error)
    }
}
// random
export const random=async(req,res,next)=>{
    try {
        const videos=await Video.aggregate([{$sample:{size:40}}]);
        res.status(200).json(videos);
    } catch (error) {
        next(error)
    }
}
// trand
export const trand=async(req,res,next)=>{
    try {
        const videos=await Video.find().sort({views:-1});
        res.status(200).json(videos);
    } catch (error) {
        next(error)
    }
}

// sub
export const sub=async(req,res,next)=>{
    try {
        const user=await User.findById(req.user.id);
        const subscribedChannels=user.suscribedUsers;
         
        const list=await Promise.all(
            subscribedChannels.map(async(channelId)=>{
             
                return await Video.find({userId:channelId});
            })
        );
res.status(200).json(list.flat().sort((a,b)=>b.createdAt-a.createdAt))
    } catch (error) {
        next(error)
    }
}
// get by tag
export const getByTag=async(req,res,next)=>{
    const tags=req.query.tags.split(',');
    try {
        const videos=await Video.find({tags:{$in:tags}}).limit(20);
        res.staus(200).json(videos);
    } catch (error) {
        next(error)
    }
}
// Search
export const search=async(req,res,next)=>{
    const query=req.query.q;

    try {
       const videos=await Video.find({
        title:{$regex:query,$options:"i"},
       }).limit(40); 
       res.status(200).json(videos);   
    } catch (error) {
        next(error);
    }
}
