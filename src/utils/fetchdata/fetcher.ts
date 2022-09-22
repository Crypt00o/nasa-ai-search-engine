import axios from "axios";
import { API_TOKEN } from "../../config";

// Fetching Data With Fetch List & Api Token

const fetcher=async(fetchList:Array<string>):Promise<Array<object>>=>{
    try{
      let fetched:Array<object>=[];
        for(let i=0;i<fetchList.length;i++){
            try{
            const result=(await axios.get(fetchList[i].concat("?api_key=",API_TOKEN as string))).data

            fetched.push(result)
            }
            catch(err:unknown){
                
                console.log(`[-] Error While Fetching :${fetchList[i]}`)
                
            }
        }
        return fetched
    }
catch(err:unknown){
    console.log(`[-] Error While After Data Fetched ${err}`);
    return new Array(0);
}
}


export {fetcher}