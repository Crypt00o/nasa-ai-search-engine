import { Request,Response,NextFunction } from "express";
import { ORIGIN } from "../config";
const allowRemoteOriginCors=(_:Request,res:Response,next:NextFunction)=>{
    res.header("Access-Control-Allow-Origin",ORIGIN);
    next()
}
export {allowRemoteOriginCors}