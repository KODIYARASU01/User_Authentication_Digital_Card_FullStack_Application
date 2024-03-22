import express from 'express';
let router=express.Router();
import { postRegister,postLogin } from '../Controllers/UserAuth.controllers.js';

router.post('/register',postRegister);

router.post('/login',postLogin);

export default router;
