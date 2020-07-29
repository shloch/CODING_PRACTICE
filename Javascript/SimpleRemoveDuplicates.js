
// In this Kata, you will remove the left-most 
// duplicates from a list of integers and return the result.

// // Remove the 3's at indices 0 and 3
// // followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
// More examples can be found in the test cases.

// Good luck!

// EXERCISE ==> https://www.codewars.com/kata/5ba38ba180824a86850000f7


function solve(arr){
    let answer = []
    while(arr.length > 0) {
      const poppedElement = arr.pop()
      if (!answer.includes(poppedElement)) {
        answer.push(poppedElement)
      }
    }
  return answer.reverse()
}
