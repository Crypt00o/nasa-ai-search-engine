import {env} from "process"
import {config} from "dotenv"
import { resolve } from "path"
import {mkdirSync,existsSync} from "fs"
config()

const {PORT,API_TOKEN,EXPIRE_DATA_FETCH,ORIGIN}=env
const nasaData_Directory=resolve(__dirname,"..","./nasa-data")
const assestsJsonDirectory=resolve(__dirname,"..","assests-json")


//createing nasa-data dir if not exists

if(!(existsSync(nasaData_Directory))){


    try{
        mkdirSync(nasaData_Directory)
    }
    catch(err:unknown){
        console.log(`Can,t Create NASA Data Directory ${err}`)
    }

}



const API_DATA=resolve(nasaData_Directory,"cached-data.json") ,API_FETCH_LIST=resolve(assestsJsonDirectory,"fetch-list.json"),STOP_WORDS=resolve(assestsJsonDirectory,"stop-words.json")


export {ORIGIN,PORT,API_DATA,API_FETCH_LIST,API_TOKEN,EXPIRE_DATA_FETCH,STOP_WORDS}