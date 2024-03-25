import express from "express";
let router = express.Router();
import {
  postData,
  getData,
  getSpecificData,
  updateData,
  deleteData,
} from "../Controllers/ContactDetail.controller.js";
import { verifyToken } from "../Middleware/Auth.js";
//Create Contact Details :
router.post("/",verifyToken, postData);

//Get Contact Detail :

router.get("/",verifyToken, getData);
//Get Specific Contact Detail :
router.get("/:id",verifyToken, getSpecificData);

//Update Speicfic Data From Database :

router.put("/:id",verifyToken, updateData);

//Delete Specific Data :

router.delete("/:id",verifyToken, deleteData);

export default router;
