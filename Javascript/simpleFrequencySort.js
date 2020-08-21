/*
In this Kata, you will sort elements in an array by decreasing
 frequency of elements. If two elements have the same frequency, 
 sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
--we sort by highest frequency to lowest frequency. 
If two elements have same frequency, we sort by increasing value
More examples in test cases.

Good luck!

EXERCISE --> https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

-------------My Walkthrough videos------------------------
- https://www.youtube.com/watch?v=MWxwJZi31Fo (part 1)
- https://www.youtube.com/watch?v=jp-fNQ7VOmc  (part 2)
----------------------------------------------------------

*/

function solve(arr){
  let objInt = {}
  for(let i of arr) {
    if (i in objInt) {
      objInt[i] = objInt[i] + 1
    } else {
      objInt[i] = 1
    }
  }
  
  let tmpArr = []
  for(let key in objInt) {
    tmpArr.push([key, objInt[key]])
  }
  tmpArr.sort((a,b) => a[1] - b[1])
  const reversed = tmpArr.reverse()
  
  
  //[ [3, [3]], [2, [7, 5]], [1, [5,9]]]
  const firstPair = [reversed[0][1], [Number(reversed[0][0])]]
  let tmpAnswer = [firstPair]
 
  for(let i = 1; i < reversed.length; i++) {
    if(reversed[i][1] === tmpAnswer[tmpAnswer.length-1][0]) {
      tmpAnswer[tmpAnswer.length-1][1].push(Number(reversed[i][0]))
    }else{ 
      const newSub = [reversed[i][1], [Number(reversed[i][0])]]
      tmpAnswer.push(newSub)
    }
  }
  let answer = []
  for(let i = 0; i < tmpAnswer.length; i++) {
    const subSortedArray = tmpAnswer[i][1].sort((a,b) => a-b)
    for (let ss = 0; ss < subSortedArray.length; ss++) {
      for (let p = 0; p < tmpAnswer[i][0]; p++) {
        answer.push(subSortedArray[ss])
      }
    }
  }
  return answer
  
}

/* --------------------- sample tests ----------------------------
describe("Basic tests", function(){
Test.assertDeepEquals(solve([2,3,5,3,7,9,5,3,7]),[3,3,3,5,5,7,7,2,9])
Test.assertDeepEquals(solve([1,2,3,0,5,0,1,6,8,8,6,9,1]),[1,1,1,0,0,6,6,8,8,2,3,5,9])
Test.assertDeepEquals(solve([5,9,6,9,6,5,9,9,4,4]),[9,9,9,9,4,4,5,5,6,6])
Test.assertDeepEquals(solve([4,4,2,5,1,1,3,3,2,8]),[1,1,2,2,3,3,4,4,5,8])
Test.assertDeepEquals(solve([4,9,5,0,7,3,8,4,9,0]),[0,0,4,4,9,9,3,5,7,8])
});

*/