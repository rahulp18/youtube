import express from 'express'

import { signin, signup } from '../controllers/auth.js'



const router=express.Router();

router.post('/signup',signup);

// Signin user
router.post('/signin',signin);


export default router;

