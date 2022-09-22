import {env} from "process"
import {config} from "dotenv"
import { resolve } from "path"
config()
const {PORT,API_TOKEN,EXPIRE_DATA_FETCH}=env
const nasaData_Directory=resolve(__dirname,"..","./nasa-data")


// That,s Require makeing A nasa-data Directory at the root of the project with a fetch_list.txt contain nasa api

const API_DATA=resolve(nasaData_Directory,"data.json") ,API_FETCH_LIST=resolve(nasaData_Directory,"fetch_list.txt")


export {PORT,API_DATA,API_FETCH_LIST,API_TOKEN,EXPIRE_DATA_FETCH}