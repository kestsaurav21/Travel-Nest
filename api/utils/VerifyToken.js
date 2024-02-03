import jwt from 'jsonwebtoken';

import { createError } from "./error.js";

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;

    if(!token){
        return res.status(403).send("A token is required for authentication");
    }
    jwt.verify(token,process.env.JWT, (err,user) => {
        if(err) return res.status(401).send("Invalid Token");

        req.user = user;
        next()
    })
    


}
