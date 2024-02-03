import jwt from 'jsonwebtoken';

import { createError } from "./error.js";
import { verifyToken } from './VerifyToken.js';

export const verifyAdmin = (req,res,next) => {
    if(req.user.isAdmin){
        next()
    }
    else{
        return res.status(403).send("You are not authorized.");

    } 
}