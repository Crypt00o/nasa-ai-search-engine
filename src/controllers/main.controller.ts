import { Request, Response } from 'express'
interface  jsonResponse {
Error?:string,
err?:boolean,
Message?:string,
Server?:string
}

const myGeneralJsonResponser=(req:Request,res:Response,statusCode:number,replay:jsonResponse):void=>{
  res.writeHead(statusCode,{'content-type':'application/json'})
  res.write(JSON.stringify(replay))
  res.end()

}
const myGeneralHtmLResponser=(req:Request,res:Response,statusCode:number,replay:string):void=>{
  res.writeHead(statusCode,{'content-type':'text/html ; charset=utf-8'})
  res.write(replay)
  res.end()

}

const welcomeMessage = (req: Request, res: Response): void => {
myGeneralJsonResponser(req,res,200,{Server:'Hello From  Modern Nasa-Api Server - Search Engine Created By Hacknoide Team !'})
}

const notFound = (req: Request, res: Response): void => {
  const invalidUrl: string = req.url
  myGeneralJsonResponser(req,res,404,{ Error: '404 Not Found : '.concat(invalidUrl) })
  
}

export { notFound, welcomeMessage , myGeneralJsonResponser , myGeneralHtmLResponser }

