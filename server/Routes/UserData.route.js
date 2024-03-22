import express from 'express';
import { getUserData } from '../Controllers/UserData.controller.js';
import { verifyToken } from '../Middleware/Auth.js';


let router=express.Router();


router.get('/:id',verifyToken,getUserData);

export default router;