import { SearchResult } from "../../types/SearchResult"

// This Will match every value  with a query[] element 

const match=(query:Array<string>,element:any):number=>{
    let priority:number=0
    
    if((element.toString()).match(RegExp(query[query.length-1],"gi"))){
        return query.length+1000
    }
    for(let i=0;i<query.length;i++){
        const result=(element.toString()).match(RegExp(query[i],"gi"))
       if(result){
        priority+=result.length
       }
    }
    return priority
}

// This Will Search in values with every Objects or Nested Objects

const search=(query:Array<string>,nasaDataObj:object,founded:Array<unknown>):void=>{
    let priority:number=0
    for(let i=0;i<Object.keys(nasaDataObj).length;i++){
        if(typeof (nasaDataObj as any)[Object.keys(nasaDataObj)[i]] as string =="object"){
               search(query,(nasaDataObj as any)[Object.keys(nasaDataObj)[i]],founded)       
        }
        else{
             priority += match(query,(nasaDataObj as any)[Object.keys(nasaDataObj)[i]])
        }

    }
    if(priority){
        founded.push({priority:priority,result:nasaDataObj})
    }
}




const mainSearch=(query:Array<string>,nasaData:Array<object>):Array<SearchResult>=>{
    let founded:Array<SearchResult>=[]
    for(let i =0 ;i<nasaData.length;i++ ){
        search(query,nasaData[i],founded)
    }
    return founded
}

export {mainSearch}