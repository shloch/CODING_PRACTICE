/*
In this Kata, you will be given a string that may have mixed
uppercase and lowercase letters and your task is to convert
that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and
lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase.
 Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase.
Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase.
Change all to lowercase.
More examples in test cases. Good luck!

Please also try:

EXERCISE ==> https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

*/

function solve(str) {
  let lowerCounts = 0;
  str.split('').forEach((char) => {
    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      lowerCounts += 1;
    }
  });
  const upperCounts = str.length - lowerCounts;
  return (lowerCounts >= upperCounts) ? str.toLowerCase() : str.toUpperCase();
}

/* ----------------- test samples ------------------
describe("Basic tests", function(){
Test.assertEquals(solve("code"),"code");
Test.assertEquals(solve("CODe"),"CODE");
Test.assertEquals(solve("COde"),"code");
Test.assertEquals(solve("Code"),"code");
});
*/
