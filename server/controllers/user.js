import { CreateError } from '../error.js'
import User from '../models/User.js'
import Video from '../models/Video.js'


export const update=async(req,res,next)=>{
   if(req.params.id===req.user.id){
    try {
      const updatedUser=await User.findByIdAndUpdate(req.params.id,{
        $set:req.body,
      },{
        new:true
      });

      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
   } else{
    return next(CreateError(403,"You can update only your account!"))
   }
}

//delete user

export const deleteuser=async(req,res,next)=>{
 if(req.params.id===req.user.id){
    try {
      await User.findByIdAndDelete(req.params.id);

      res.status(200).json("User has been deleted");

    } catch (error) {
      next(error);
    }
 } else{
  next(CreateError(401,"You can delete only your account"));
 }


}

// get a user
export const getUser=async(req,res,next)=>{
  try {
    const user=await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }

}
// subscribe user

export const subscribe=async(req,res,next)=>{
  try {
    await User.findByIdAndUpdate(req.user.id,{
      $push:{suscribedUsers:req.params.id},
    });
    await User.findByIdAndUpdate(req.params.id,{
      $inc:{subscribers:1},
    });
    res.status(200).json("subscribed successfully");
  } catch (error) {
    next(error);
  }

}
// unSubscrbe
export const unsubscibe=async(req,res,next)=>{
  try {
    await User.findByIdAndUpdate(req.user.id,{
      $pull:{suscribedUsers:req.params.id},
    });
    await User.findByIdAndUpdate(req.params.id,{
      $inc:{subscribers:-1},
    });
    res.status(200).json("Unsubscribed successfully");
  } catch (error) {
    next(error);
  }


}

// like
export const like=async(req,res,next)=>{
  try {
    const id=req.user.id;
    const videoId=req.params.videoId;
    await Video.findByIdAndUpdate(videoId,{
        $addToSet:{likes:id},
        $pull:{dislikes:id}
    })
    res.status(200).json("The video has been liked")
  } catch (error) {
    next(error);
  }

}
// dislike
export const dislike=async(req,res,next)=>{
  try {
    const id=req.user.id;
    const videoId=req.params.videoId;
    await Video.findByIdAndUpdate(videoId,{
      $addToSet:{dislikes:id},
      $pull:{likes:id}
    });
    res.status(200).json("The video has been disliked.")
  } catch (error) {
    next(error);
  }

}