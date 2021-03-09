
/*

Complete the function that accepts a valid 
string and returns an integer.

Wait, that would be too easy! Every character of the
 string should be converted to the hex value of its ascii code,
  then the result should be the sum of the numbers in the hex strings (ignore letters).

*/

function hexHash(code){
  let strConstruct = ''
  for(let i in code) {
    strConstruct += code[i].charCodeAt(0).toString(16)
  }
  let sum = 0;
  for(let char of strConstruct) {
    if(+char < 10) {
      sum += (+char)
    }
  }
  return sum
}

