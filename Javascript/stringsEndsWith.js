/*

KATA = https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/javascript

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/


//----------------- solution 1 -----------------

function solution(str, ending){
  //if (ending.length == 0) return true
  //return str.substr(-(ending.length)) == ending
  
  return (ending.length == 0) ? true : str.substr(-(ending.length)) == ending
}


// ----------------- solution 2  -----------------

function solution(str, ending){
  return str.endsWith(ending)
}