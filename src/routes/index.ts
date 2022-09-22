import express, { Router } from 'express'
import { welcomeMessage, notFound } from '../controllers/main.controller'
import {join} from 'path'
import {searchRouter} from '../routes/search'

//Declareing Static Directory for Serving Static Files 

const staticDir:string=join(__dirname,'..','..','static')

//Creatring Router instance

const router: Router = express.Router()

// Useing Static Directory for Serving Static Files 

router.use('/static',express.static(staticDir))

// Welcome Message With / EndPoint

router.get('/', welcomeMessage)

router.use("/api",searchRouter)

// Response With Not Found for any invalid path

router.all('/*', notFound)


export default router

