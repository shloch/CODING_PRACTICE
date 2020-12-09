/**
sort array of words by length, while maintening same order
as original array for words of same length (sorting with stability
*/
function sortByLength(strs) {
    //  write code here.
    // const obj = {}
    // const arrOfObj = []
    // for(let i = 0; i < strs.length-1; i++){
    //     //obj[word] = word.length
    //     //const tmpObj;
    //     //console.log(strs[i])
    //     let w = strs[i]
    //     console.log(w)
    //     arrOfObj.push({word : strs[i], length: strs[i].length})
    // }
    // console.log(arrOfObj)
    const arr2 = strs.sort((a,b) => a.length - b.length)
    console.log(arr2)
    return arr2

    
}

const arr = ["abc", "", "aaa", "a", "zz"]
sortByLength(arr)
