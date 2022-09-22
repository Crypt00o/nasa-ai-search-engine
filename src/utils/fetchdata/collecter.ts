import { fetcher } from "./fetcher"
import { readFetchList,writeNasaData } from "./nasaData"
import {EXPIRE_DATA_FETCH } from "../../config"

// I Write Collecter To Fetch Data And Renew The Data Exists Every One Hour 

const collecter=async()=>{
    setTimeout(collecter,parseInt(EXPIRE_DATA_FETCH as string));
    writeNasaData(await fetcher(readFetchList() )) ;
    console.log(`\n\n[+] Nasa Data Fetched Successfully At : ${(new Date()).toLocaleString()}\n[+] Next Fetch Will be After One Hour`)
}

export{collecter}


