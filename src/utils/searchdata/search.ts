import { SearchResult } from "../../types/SearchResult"
import {prioritySort} from "./prioritySort"

// This Will match every value  with a query[] element 

const match=(query:Array<string>,element:any):number=>{
    let priority:number=0
    
    if((String(element)).match(RegExp(query[query.length-1],"gi"))){
        return query.length+1000
    }
    for(let i=0;i<query.length;i++){
        const result=(String(element)).match(RegExp(query[i],"gi"))
       if(result){
        priority+=result.length
       }
    }
    return priority
}

// This Will Search in values with every Objects or Nested Objects

const search=(query:Array<string>,nasaDataObj:any,founded:Array<unknown>):void=>{
   
    let priority:number=0
    if(typeof nasaDataObj === "object" && nasaDataObj !==null){
    for(let i=0;i<Object.keys(nasaDataObj).length;i++){
        
        //if((nasaDataObj as any)[Object.keys(nasaDataObj)[i]] as string =="object"){
          //  continue;
            
        //}
        if(typeof nasaDataObj === "object" && typeof nasaDataObj !== null){
        
            if(typeof (nasaDataObj as any)[Object.keys(nasaDataObj)[i]] as string =="object" ){
                search(query,(nasaDataObj as any)[Object.keys(nasaDataObj)[i]],founded)       
        
            }
        
            else{
                priority += match(query,(nasaDataObj as any)[Object.keys(nasaDataObj)[i]])
            }
        }
        else{
            priority+=match(query,(nasaDataObj as any))
        }
    }
    }
    else{
        priority += match(query,nasaDataObj)
    }
   
    if(priority){
        founded.push({priority:priority,result:nasaDataObj})
    }
}




const mainSearch=(query:Array<string>,nasaData:Array<object>):Array<SearchResult>=>{
    let founded:Array<SearchResult>=Array(0)
    for(let i =0 ;i<nasaData.length;i++ ){
        search(query,nasaData[i],founded)
    }
    return prioritySort(founded)
}

export {mainSearch}