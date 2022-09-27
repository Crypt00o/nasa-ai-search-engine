import {env} from "process"
import {config} from "dotenv"
import { resolve } from "path"
import {mkdirSync,existsSync} from "fs"
import {S3} from "aws-sdk"
import { isGeneratorFunction } from "util/types"
config()

const {
	NODE_ENV,PORT,API_TOKEN,EXPIRE_DATA_FETCH,ORIGIN,S3_BUCKET
}=env
const nasaData_Directory=resolve(__dirname,"..","./nasa-data")
const assestsJsonDirectory=resolve(__dirname,"..","assests-json")

let S3_CLIENT:S3, API_DATA:string;

//createing nasa-data dir if not exists
if((NODE_ENV as string)==="dev"){
	if(!(existsSync(nasaData_Directory))){
		try{
			mkdirSync(nasaData_Directory)
		}
		 catch(err:unknown){
			console.log(`Can,t Create NASA Data Directory ${err}`)
		}
	}
}

if((NODE_ENV as string)==="prod"){
S3_CLIENT=new S3();
}




if(NODE_ENV==="dev"){
 	API_DATA=resolve(nasaData_Directory,"cached-data.json") 
}
else{
	API_DATA="cached-data.json"
}

 const API_FETCH_LIST=resolve(assestsJsonDirectory,"fetch-list.json"),STOP_WORDS=resolve(assestsJsonDirectory,"stop-words.json")


export {NODE_ENV,S3_CLIENT,S3_BUCKET,ORIGIN,PORT,API_DATA,API_FETCH_LIST,API_TOKEN,EXPIRE_DATA_FETCH,STOP_WORDS}
