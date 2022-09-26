import { STOP_WORDS } from "../../config"
import { getJsonData } from "../fetchdata/nasaData"

const parseQuery=(query:string):Array<string>=>{
const excludeWords=getJsonData(STOP_WORDS)
const possibleQuery  =((query.replace(/[^a-zA-Z0-9 ]/g,"").split(" ")).concat([query])).filter((value, index, self) => {
    return self.indexOf(value) === index && (!excludeWords.includes(value))
 })
 return possibleQuery
}


export{parseQuery}

