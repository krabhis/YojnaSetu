import User from "../model/user.model.js"
import jwt from "jsonwebtoken";
// import { refreshAccessToken } from "../controller/user.controller.js";

export const verifyJWT=async(req,res,next)=>{
    try{
        const token = req.cookies?.accessToken||req.header("Authorization")?.replace("Bearer","")||req.body?.accessToken;
        if(!token){
            return res.status(403).json({
                message:"JWT_ACCESS_TOKEN_NOT_FOUND",
                status:403,
                success:false,
            }) 
        }

        let decoded=null; 

        try{

            decoded=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);

        }catch(err){
            if(err.name==="TokenExpiredError"){
                return res.status(403).json({
                    error:err,
                    message:"JWT_ACCESS_TOKEN_EXPIRY",
                    status:403,
                    success:false,
                });

            }else if(err.name==="JsonWebTokenError"){
                return res.status(403).json({
                    error:err,
                    message:"JWT_ACCESS_TOKEN_INVALID",
                    status:403,
                    success:false,
                });
            }

        }
        const user=await User.findById(decoded._id).select("-password -refreshToken");
        if(!user){
            return res.status(403).json({
                message:"JWT_ACCESS_TOKEN_INVALID",
                status:403,
                success:false,
            });
        }
req.user=user;
next();

    }catch(error){
        console.error("Error verifying JWT:",error);
        return res.status(403).json({
            message:"GENERAL_ERROR",
            status:403,
            success:false,
            error:error.message,
        });
    }
};