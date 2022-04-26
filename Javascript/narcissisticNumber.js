/*
kata = https://www.codewars.com/kata/56b22765e1007b79f2000079/javascript

A Narcissistic Number is a number of length n in which the sum of its digits to the 
power of n is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153
*/

function isNarcissistic(n) {
  const numStr = `${n}`;
  let somme = 0;
  numStr.split("").forEach((digit) => {
    somme += Math.pow(+digit, numStr.length);
  });
  return somme === n;
}
