import express, { Router } from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";
import { verifyToken } from "../utils/VerifyToken.js";
import { verifyUser } from "../utils/verifyUser.js";


const router = express.Router();

//Verify

// router.get("/checkAuth", verifyToken,  (req,res,next)=>{
//     res.send("Hello ! user you got logged in.")
// })

// router.get("/checkUser/:id", verifyUser,  (req,res,next)=>{
//     res.send("Hello ! user you got logged in and you have all acccess to your acccount")
// })

// router.get("/checkAdmin/:id", verifyToken, verifyAdmin,  (req,res,next)=>{
//     res.send("Hello ! Admin you got logged in and you have all acccess.")
// })



//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET

router.get("/:id", verifyUser, getUser)

//GET ALL

router.get("/", verifyAdmin, getUsers)

export default router;