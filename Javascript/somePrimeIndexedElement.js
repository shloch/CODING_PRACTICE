/*
In this Kata, you will be given an integer array and your
 task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

Good luck!

If you like this Kata, try:

EXERCISE ==> https://www.codewars.com/kata/59f38b033640ce9fc700015b/train/javascript/5f25994ad47aec001f7a1d72

*/


var eratosthenes = function(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};

function total(arr){
  const primeList = eratosthenes(arr.length)
  let sum = 0
  primeList.forEach(prime => {
    sum += arr[prime]
  })
  return sum
  
};


/* --------------------- sample tests ---------------------
describe("Basic tests", function(){
Test.assertEquals(total([]),0);
Test.assertEquals(total([1,2,3,4]),7);
Test.assertEquals(total([1,2,3,4,5,6]),13);
Test.assertEquals(total([1,2,3,4,5,6,7,8]),21);
Test.assertEquals(total([1,2,3,4,5,6,7,8,9,10,11]),21);
Test.assertEquals(total([1,2,3,4,5,6,7,8,9,10,11,12,13]),33);
Test.assertEquals(total([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),47);
});

*/