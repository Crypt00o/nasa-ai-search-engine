import axios from "axios";
import { API_TOKEN } from "../../config";
import { NasaApi } from "../../types/NasaApi";
// Fetching Data With Fetch List & Api Token

const fetcher=async(fetchList:Array<NasaApi>,byToken:boolean=true):Promise<Array<object>>=>{
    try{
      let fetched:Array<object>=[];
        for(let i=0;i<fetchList.length;i++){
            try{
                if(fetchList[i].tokenRequired){
                const result=(await axios.get(fetchList[i].url.concat("?api_key=",API_TOKEN as string))).data 
                fetched.push(result)
                }
                else{
                    const result=(await axios.get(fetchList[i].url)).data 
                    fetched.push(result)
                }
                console.log(`[+] Success Fetching : ${fetchList[i].url}`)
            }
            catch(err:unknown){
                console.log(`[-] Failed Fetching  : ${fetchList[i].url}`)
            }
        }
        return fetched
    }
catch(err:unknown){
    return new Array(0);
}
}


export {fetcher}