import express, { Router } from 'express'
import { welcomeMessage, notFound } from '../controllers/main.controller'
import {join} from 'path'
import {searchRouter} from '../routes/search'

//Creatring Router instance

const router: Router = express.Router()


// Welcome Message With / EndPoint

router.get('/', welcomeMessage)

router.use("/api",searchRouter)

// Response With Not Found for any invalid path

router.all('/*', notFound)


export default router

