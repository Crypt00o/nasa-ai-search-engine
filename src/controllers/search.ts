
import { Request,Response } from "express";
import { main } from "../utils/main";
const searchResponser=(req:Request,res:Response)=>{
    try{
        
const query:string=req.query.query as string;
const offset:number=(isNaN(parseInt(req.query.page as string)) ||parseInt(req.query.page as string)<0 )? 0:parseInt(req.query.page as string)   
if(query){

const result=main(query,offset);
res.status(200).json(result);
}else{
    res.status(400).json({"Error":"Bad Request, Not Valid Query!"})
}
    }
    catch(err:unknown){
        res.status(500).json({Error:"Internal Error"})
    }
}
export{searchResponser}