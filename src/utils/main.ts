import { getNasaData } from "./fetchdata/nasaData";
import { parseQuery } from "./searchdata/filter";
import { mainSearch } from "./searchdata/search";
import { SearchResult } from "../types/SearchResult";

const main=async(query:string,offset:number):Promise<Array<SearchResult>>=>{
    
return mainSearch(parseQuery(query),((await getNasaData()) as Array<object>)).slice((offset*10),((offset*10)+10))
}

const mainTotalSearch=async(query:string):Promise<Array<SearchResult>>=>{
  return  mainSearch(parseQuery(query),((await getNasaData()) as Array<object>))
}

export{main,mainTotalSearch}
