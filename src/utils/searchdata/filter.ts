
const parseQuery=(query:string):Array<string>=>{
const possibleQuery  =((query.replace(/[^a-zA-Z0-9 ]/g,"").split(" ")).concat([query])).filter((value, index, self) => {
    return self.indexOf(value) === index 
 })
 return possibleQuery
}


export{parseQuery}

