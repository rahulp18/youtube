import express from 'express'
import { deleteuser, dislike, getUser, like, subscribe, unsubscibe, update } from '../controllers/user.js'
import { verifyToken } from '../verifyToken.js';

const router=express.Router();

// update user
router.put("/:id",verifyToken,update);
// delete user
router.delete('/:id',verifyToken,deleteuser);
// get a user
router.get('/find/:id',getUser);
// Subscribe a user

router.put("/sub/:id",verifyToken,subscribe);

// unsubscribe a user
router.put('/unsub/:id',verifyToken,unsubscibe);
// like video
router.put('/like/videoId',verifyToken,like);
// Dislikevideo
router.put('/dislike/videoId',verifyToken,dislike);


export default router;