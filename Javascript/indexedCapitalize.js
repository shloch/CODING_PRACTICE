/*
Given a string and an array of integers representing indices, 
capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF".
There is no index 100.
The input will be a lowercase string with no 
spaces and an array of digits.

Good luck!

EXERCISE --> https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
*/

function capitalize(str,arr){
  const strA = str.split('')
  arr.forEach(idx => {
     if (strA[idx] !== undefined){
       strA[idx] = strA[idx].toUpperCase()
     }
  })
  return strA.join('')
};

/* -------------------- Test cases ------------------------------
describe("Basic tests", function(){
Test.assertDeepEquals(capitalize("abcdef",[1,2,5]),'aBCdeF');
Test.assertDeepEquals(capitalize("abcdef",[1,2,5,100]),'aBCdeF');
Test.assertDeepEquals(capitalize("codewars",[1,3,5,50]),'cOdEwArs');
Test.assertDeepEquals(capitalize("abracadabra",[2,6,9,10]),'abRacaDabRA');
Test.assertDeepEquals(capitalize("codewarriors",[5]),'codewArriors');
Test.assertDeepEquals(capitalize("indexinglessons",[0]),'Indexinglessons');
});
*/