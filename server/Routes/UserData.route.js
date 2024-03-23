import express from 'express';
import { getUserData, updateUserData } from '../Controllers/UserData.controller.js';
import { verifyToken } from '../Middleware/Auth.js';


let router=express.Router();


router.get('/:id',verifyToken,getUserData);
router.put('/:id',verifyToken,updateUserData);

export default router;