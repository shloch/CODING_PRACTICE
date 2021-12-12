/*

kata = https://www.codewars.com/kata/59ec2d112332430ce9000005/train/javascript
In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b. For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).

See test cases for more examples.

Good luck!

If you like this Kata, please try:

Sub-array division

Divisor harmony
*/

const eratosthenes = (num) => {
   const numArr = new Array(num + 1);
   numArr.fill(true);
   numArr[0] = numArr[1] = false;
   for (let i = 2; i <= Math.sqrt(num); i++) {
      for (let j = 2; i * j <= num; j++){
          numArr[i * j] = false;
      }
   }
   return numArr.reduce((acc, val, ind) => {
      if(val){
         return acc.concat(ind);
      }else{
         return acc;
      };
   },[]);
};

function solve(a,b){
  console.log(`a=${a}, b=${b}`)
  let prime_numbers_b;
  if(a > b) {
      prime_numbers_b = eratosthenes(b)
  } else {
      prime_numbers_b = eratosthenes(a + 100)
  }
  
  let filter = prime_numbers_b.filter(x => x <= a)
  
  console.log(`nbr prim=${prime_numbers_b.length}`)
  
  for(let num of filter) {
    if(a % num != 0) {
      return false
    }
  }
  return true
};

