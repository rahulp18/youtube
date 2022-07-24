import express from 'express'
 
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trand, updateVideo } from '../controllers/videos.js'


import {verifyToken} from '../verifyToken.js'
 
const router=express.Router();

// cerate a video
router.post('/',verifyToken,addVideo);
router.put('/:id',verifyToken,updateVideo);
router.delete('/:id',verifyToken,deleteVideo);
router.get('/find/:id', getVideo);
router.get('/view/:id', addView);
router.get('/trand', trand);
router.get('/random', random);
router.get('/sub', verifyToken,sub);
router.get('/tag',getByTag);
router.get('/search',search);

export default router;
