import jwt from 'jsonwebtoken';

import { createError } from "./error.js";
import { verifyToken } from './VerifyToken.js';

export const verifyUser = (req,res,next) => {

    verifyToken(req,res, () => {
        if(req.user.id === req.params.id || !req.user.isAdmin ){
            next()
        }
        else{
            return res.status(403).send("You are not authorized.");

        }
    })
    
    
}
