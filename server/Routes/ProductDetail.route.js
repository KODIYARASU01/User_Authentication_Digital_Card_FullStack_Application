import express, { Router } from "express";
import {
  postData,
  getData,
  getSpecificData,
  updateData,
  deleteData,
  getSpecificIdData,
} from "../Controllers/ProductDetail.controller.js";
import { verifyToken } from "../Middleware/Auth.js";

let router = express.Router();
// Create Data
router.post("/",verifyToken, postData);

//Read Data;
router.get("/",verifyToken, getData);

//Specific data get from database :
router.get("/:id",verifyToken, getSpecificData);

router.get('/specific/:id',verifyToken,getSpecificIdData)
//Upate Data:
router.put("/specific/:id",verifyToken, updateData);

//Delete route:
router.delete("/specific/:id",verifyToken, deleteData);

export default router;
