import { getNasaData  } from "./fetchdata/nasaData";
import { parseQuery } from "./searchdata/filter";
import { mainSearch } from "./searchdata/search";
import { SearchResult } from "../types/SearchResult";


const main=(query:string,offset:number):Array<SearchResult>=>{
    
return mainSearch(parseQuery(query),getNasaData()).slice((offset*10),((offset*10)+10))
}

export{main}