import {SearchResult} from "../../types/SearchResult"

// Merge Two Arrays from Type SearchResult 

const mergeArrays=(left:Array<SearchResult>, right:Array<SearchResult>)=> {
    let temp = Array(0)
    while (left.length && right.length) {
        if ((left[0].priority as number) > (right[0].priority as number) ) {
            temp.push(left.shift())  
        } else {
            temp.push(right.shift())
        }
    }
    return [ ...temp, ...left, ...right ] as Array<SearchResult>
}

// The Implementation of Merge on Search Results

const priorityMergeSort=(nasaSearchResult:Array<SearchResult>):Array<SearchResult>=> {
    const middleIndex = nasaSearchResult.length / 2
    if(nasaSearchResult.length < 2){
      return nasaSearchResult
    }
    const left = nasaSearchResult.splice(0,middleIndex)
    return mergeArrays(priorityMergeSort(left),priorityMergeSort(nasaSearchResult))
  }

  // Insertation Sort for Sort  Search Results

const priorityInsertionSort=(nasaSearchResult:Array<SearchResult>):Array<SearchResult>=> { 

    for(let i = nasaSearchResult.length-2; i>=0; i--) {

        let temp= nasaSearchResult[i];
        let j;

        for(j = i; ((j < nasaSearchResult.length) && (nasaSearchResult[j+1].priority as number > temp)); j++){ 
            nasaSearchResult[j] = nasaSearchResult[j+1]; 
        } 
        nasaSearchResult[j] = temp;
    }
    return nasaSearchResult;
}



// This Choose What the Type of Sorting It Will use accordeing to the Search Result length

const prioritySort=(result:Array<SearchResult>):Array<SearchResult>=>{

if(result.length>100){
return priorityInsertionSort(result)
}
else{
return priorityMergeSort(result)
}
    
}

export {prioritySort}