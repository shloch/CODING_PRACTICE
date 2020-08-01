/* 
In this Kata, we are going to reverse a 
string while maintaining spaces.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space after the first three characters, hence "edo cruo"

solve("your code rocks") = "skco redo cruoy"
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be 
lower case letters and in some cases spaces.

Good luck!

Please also try:

EXERCISE ==> https://www.codewars.com/kata/5a71939d373c2e634200008e

*/

function solve(str){
   const spaces = []
   str.split('').forEach((char,idx) => {
     if (char === " ") spaces.push(idx)
   })
   
  
   const rev = str.split('').reverse().join('')
   const rev2 = []
   rev.split(' ').forEach(word => rev2.push(word))
   const finalReverse = rev2.join('').split('')
   spaces.forEach(idx => finalReverse.splice(idx, 0, " "))
   
  return finalReverse.join('')
   
}