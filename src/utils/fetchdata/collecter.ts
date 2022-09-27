import { fetcher } from "./fetcher"
import { getJsonData,writeNasaData } from "./nasaData"
import {EXPIRE_DATA_FETCH,API_FETCH_LIST } from "../../config"
import { NasaApi } from "../../types/NasaApi"
// I Write Collecter To Fetch Data And Renew The Data Exists Every Custom Period Needed To Set On .env or config

const collecter=async()=>{
    let nextTime=Date.now()+parseInt(EXPIRE_DATA_FETCH as string)
      console.log('\n\n[+] Starting Fetching NASA DaTa from API List \n\n')
      setTimeout(collecter,parseInt(EXPIRE_DATA_FETCH as string));
      await writeNasaData(await fetcher((getJsonData(API_FETCH_LIST) as Array<NasaApi>))) ;
    console.log(`\n\n[+] Nasa Data Fetched Successfully At : ${(new Date()).toLocaleString()}\n[+] Next Fetch Will be On ${(new Date(nextTime)).toLocaleString()}`)
}

export{collecter}


