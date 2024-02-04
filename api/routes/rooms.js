import express, { Router } from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";
import { verifyToken } from "../utils/VerifyToken.js";
const router = express.Router();

//CREATE
router.post("/:hotelid", verifyToken, verifyAdmin, createRoom)
//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateRoom)

//DELETE
router.delete("/:id/:hotelid", verifyToken, verifyAdmin, deleteRoom)
//GET

router.get("/:id", getRoom)
//GET ALL

router.get("/", getRooms)

export default router;