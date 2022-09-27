
import { Request,Response } from "express";
import { main,mainTotalSearch } from "../utils/main";
import { mediaSearch } from "../utils/searchdata/searchMedia";
import { SearchResult } from "../types/SearchResult";
const searchResponser=async(req:Request,res:Response):Promise<void>=>{
    try{
        
const query:string=req.query.query as string;
const offset:number=(isNaN(parseInt(req.query.page as string)) ||parseInt(req.query.page as string)<0 )? 0:parseInt(req.query.page as string)   

if(query){

const result= await main(query,offset);
res.status(200).json(result);
}

else{
    res.status(400).json({"Error":"Bad Request, Not Valid Query!"})
}
    }
    catch(err:unknown){
        res.status(500).json({Error:"Internal Error"})
    }
}

const mediaSearchApi=async(req:Request,res:Response):Promise<void>=>{
try{


const query:string=req.query.query as string;
const offset:number=(isNaN(parseInt(req.query.page as string)) ||parseInt(req.query.page as string)<0 )? 0:parseInt(req.query.page as string)
if(query){

    const data:Array<SearchResult>=await mainTotalSearch(query)
    if(req.params.media==="images"){
        const result=mediaSearch(data,offset,".ico$|.bmp$|.webp$|.svg$|.pjp$|.pjpeg$|.jfif$|.jpeg$|.jpg$|.gif$|.avif$|.apng$|.png$")
        res.status(200).json(result)
    }
    else if(req.params.media==="videos"){
        const result=mediaSearch(data,offset,".avchd$|.swf$|.flv$|.qt$|.mov$|.wmv$|.avi$|.m4v$|.m4p$|.mp4$|.ogg$|.mpv$|.mpe$|.mpeg$|.mp2$|.mpg$")
        res.status(200).json(result)
    }
    else{
        res.status(400).json({"Error":"Bad Request, Not Valid Query!"})
    }
}
    else{
        res.status(400).json({"Error":"Bad Request, Not Valid Query!"})   
    }
}
catch(err:unknown){
    res.status(500).json({"Error":"Internal Error!"})
}
}

export{searchResponser,mediaSearchApi}
