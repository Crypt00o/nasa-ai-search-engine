
// This Will match every image with a query 

const match=(element:any,regex:string,founded:Array<string>):void=>{
    if((String(element)).match(RegExp(regex,"i"))){
        founded.push(element)
    }
}

// This Will Search in values with every Objects or Nested Objects

const search=(nasaDataObj:any,founded:Array<string>,regex:string):void=>{
    if(typeof nasaDataObj === "object" && nasaDataObj !==null){
    for(let i=0;i<Object.keys(nasaDataObj).length;i++){
        

        
        if(typeof nasaDataObj === "object" && typeof nasaDataObj !== null){
        
            if(typeof (nasaDataObj as any)[Object.keys(nasaDataObj)[i]] as string =="object" ){
                search((nasaDataObj as any)[Object.keys(nasaDataObj)[i]],founded,regex)       
            
            }
            else{
                match((nasaDataObj as any)[Object.keys(nasaDataObj)[i]],regex,founded)
    
            }
        
        }
        else{
            match(nasaDataObj,regex,founded)
        }
    }
}        
        else{
            match(nasaDataObj,regex,founded)
        }
    
}




const mediaSearch=(nasaData:Array<object>,offset:number,regex:string):Array<string>=>{
    let founded:Array<string>=Array(0)
    for(let i =0 ;i<nasaData.length;i++ ){
        search(nasaData[i],founded,regex)
    }
    return founded.slice((offset*10),((offset*10)+10))
}


export{mediaSearch}
