/*

KATA = https://www.codewars.com/kata/5656b6906de340bd1b0000ac

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

//====== solution 1 ======


function removeDuplicate(string) {
  return string
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join('');
}

function sortsString(str) {
  return str.split('').sort().join('')
}

function longest(s1, s2) {
  const combinesStr = removeDuplicate(removeDuplicate(s1) + removeDuplicate(s2))
  return sortsString(combinesStr)
}

//====== solution 2 ======

function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('')
}