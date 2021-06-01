/*
lnk = https://www.codewars.com/kata/52180ce6f626d55cf8000071/train/javascript

Please write a function that will take a string as input and return a hash.
 The string will be formatted as such. The key will always
  be a symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"
This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}
*/

function strToHash(str){
  let obj = {}
  let commaSplit = str.split(',').map(word => word.trim())
  for(let equation of commaSplit){
    equationSplit = equation.split('=')
    if (equationSplit[0] != '') obj[equationSplit[0]] = +equationSplit[1]
  }
  return obj
}