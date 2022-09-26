import { getNasaData ,getJsonData } from "./fetchdata/nasaData";
import { parseQuery } from "./searchdata/filter";
import { mainSearch } from "./searchdata/search";
import { SearchResult } from "../types/SearchResult";
import {API_DATA} from "../config"

const main=(query:string,offset:number):Array<SearchResult>=>{
    
return mainSearch(parseQuery(query),(getJsonData(API_DATA) as Array<object>)).slice((offset*10),((offset*10)+10))
}

const mainTotalSearch=(query:string):Array<SearchResult>=>{
  return  mainSearch(parseQuery(query),(getJsonData(API_DATA) as Array<object>))
}

export{main,mainTotalSearch}