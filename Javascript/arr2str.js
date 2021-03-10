/*
Kata = https://www.codewars.com/kata/59a602dc57019008d900004e

transform an array into a string
*/

function transform(array) {
  let myStr = ''
  array.forEach(element => {
    myStr = myStr + element
  })
  return myStr
  
}