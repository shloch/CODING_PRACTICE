//kata = https://www.codewars.com/kata/57fe90ae08d102a2ba0011e6

function pigLatin(phrase){
 
  return phrase.split(" ").map(s => s.substring(1,s.lenth).toLowerCase() + s[0].toLowerCase()  + 'ay').join(" ")
  
}