import express, { Application} from 'express'
import { collecter } from './utils/fetchdata/collecter'
import * as dotenv from 'dotenv'
import {myCustomizedLogger} from './middlewares/mylogger.middleware'
import router from './routes/index'
import bodyParser from 'body-parser'
import {allowRemoteOriginCors}  from "./middlewares/allowRemoteOrigin"
import helmet from 'helmet'
import {PORT} from "./config"

const app: Application = express()

// Useing BodyParser

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(allowRemoteOriginCors)

//Secure Http Headers With By Setting Some  Verious Values And Xss Filter

app.use(helmet())

//Logging Http Requests With My Customized MiddleWare

if(process.env.NODE_ENV='dev'){

app.use(myCustomizedLogger)

}

//  Fetching and ReFetching Data During a Custom Period

collecter()

// Useing Routes And Api

app.use(router)

// starting Server

app.listen(PORT||3000, () => {
  console.log(`[+] Server Listening Now at Port : ${PORT} \n\n`)
})

export default app



