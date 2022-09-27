import {writeFileSync,readFileSync} from "fs"
import { API_FETCH_LIST,API_DATA,NODE_ENV,S3_CLIENT,S3_BUCKET} from "../../config"

// Writeing Nasa Data Which Fetched

const writeNasaData=async(data:Array<object>)=>{
	if((NODE_ENV as string)==="dev"){
		 try{
			writeFileSync(API_DATA as string,JSON.stringify(data),{flag:"w",encoding:"utf-8"})
		}
		catch(err:unknown){
			console.log(`[-] Error While Writeing Fetched Data From Nasa API ${err}`)
		}
	}
	if((NODE_ENV as string)==="prod"){
		try{
			await S3_CLIENT.putObject({
				Body:JSON.stringify(data),
				Bucket:(S3_BUCKET as string),
				Key:(API_DATA as string)
			}).promise()
		}
		catch(err:unknown){
			console.log(`[-] Error While Writeing Fetched Data From Nasa API ${err}`)
		}
	}

}

// Reading Nasa Data
const getNasaData=async():Promise<Array<object>>=>{
	if((NODE_ENV as string)==="dev"){
		try{
			return JSON.parse(readFileSync(API_DATA,{encoding:"utf-8",flag:"r"}))
		}
		catch(err:unknown){
			console.log(`[-] Error While Reading Nasa Data ${err}`)
			return Array(0)
		}
	}
	else if((NODE_ENV as string)==="prod"){
		try{
		const nasaData=	await S3_CLIENT.getObject({
				Bucket:(S3_BUCKET as string),
				Key:(API_DATA as string)
			}).promise();
		return JSON.parse((nasaData.Body?.toString('utf-8')) as string)
		}
		catch(err:unknown){
			console.log(`[-] Error While Reading Nasa Data ${err}`)
			return Array(0)

		}
	}
	else{
		console.log(`[-] Error NODE ENVIRONMENT DIDN,t SET`)
		return Array(0)
	}

}






const getJsonData=(path:string):Array<object|string>=>{
    try{
        return JSON.parse(readFileSync(path as string,{flag:"r",encoding:"utf-8"}))
    }
    catch(err){
        console.log(`[-] Error While Reading Nasa Data ${err}`)
        return Array(0)
    }
}

// Reading Nasa Api-toFetch-List

const readFetchList=():Array<string>=>{

    try{
       const data :Array<string>=readFileSync(API_FETCH_LIST as string,{encoding:"utf-8",flag:"r"}).split("\n");
        return data
    }
    catch(err){
        console.log(`[-] Error While Reading Fetch List Api ${err}`)
        return Array(0)
}

}



export{readFetchList,writeNasaData,getJsonData,getNasaData}
