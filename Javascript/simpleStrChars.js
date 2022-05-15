/*
KATA = https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/javascript

In this Kata, you will be given a string and your task will 
be to return a list of ints detailing the count of
 uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3].
*/

function solve(str) {
  let upper = 0;
  let lower = 0;
  let nums = 0;
  let special = 0;

  str.split("").forEach((letter) => {
    if (/[a-z]/.test(letter)) lower++;
    if (/[A-Z]/.test(letter)) upper++;
    if (/[0-9]/.test(letter)) nums++;
    if (letter.match(/[^0-9A-Za-z]/g)) special++;
  });

  return [upper, lower, nums, special];
}
