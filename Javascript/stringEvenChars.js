/*

Write a function that returns a sequence (index begins with 1) 
of all the even characters from a string. 
If the string is smaller than two characters 
or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"


EXERCISE --> https://www.codewars.com/kata/566044325f8fddc1c000002c
*/

function evenChars(s) {
 if (s.length < 2 || s.length > 100) return "invalid string"
  const answer = []
  for (let idx in s.split('')) {
    if (idx % 2 == 1) answer.push(s[idx])
  }
  return answer
}

/*---------------------sample test------------------------------------
Test.assertSimilar(evenChars ("a"), "invalid string")
Test.assertSimilar(evenChars ("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])
-------------------------------------------------------------------------*/