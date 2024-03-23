import express from 'express';
let router=express.Router();
import { postRegister,postLogin, deleteUser } from '../Controllers/UserAuth.controllers.js';

router.post('/register',postRegister);

router.post('/login',postLogin);

router.delete('/logout',deleteUser);

export default router;
