import express, { Router } from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, updateHotel, deleteHotel, getHotel, getHotels } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";
import { verifyToken } from "../utils/VerifyToken.js";

const router = express.Router();


//CREATE
router.post("/", verifyToken, verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyToken, verifyAdmin, deleteHotel)
//GET

router.get("/:id", getHotel)
//GET ALL

router.get("/", getHotels)




export default router;