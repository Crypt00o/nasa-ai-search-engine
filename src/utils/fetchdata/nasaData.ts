import {writeFileSync,readFileSync} from "fs"
import { API_FETCH_LIST,API_DATA} from "../../config"


// Writeing Nasa Data Which Fetched

const writeNasaData=(data:Array<object>)=>{


    try{
        writeFileSync(API_DATA as string,JSON.stringify(data),{flag:"w",encoding:"utf-8"})
    }
    catch(err){
        console.log(`[-] Error While Writeing Fetch List Api ${err}`)
    }

} 

// Reading Nasa Data

const getNasaData=():Array<object>=>{
    
    
    try{
        return JSON.parse(readFileSync(API_DATA as string,{flag:"r",encoding:"utf-8"}))
    }
    catch(err){
        console.log(`[-] Error While Reading Nasa Data ${err}`)
        return []
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



export{readFetchList,getNasaData,writeNasaData}