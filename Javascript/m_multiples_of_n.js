/*Implement a function, multiples(m, n), which returns an 
array of the first m multiples of the real number n. 
Assume that m is a positive integer.

Ex.

multiples(3, 5.0)
should return

[5.0, 10.0, 15.0] */

// EXERCISE ==> https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript


function multiples(m, n){
  const arr = []
  for(let i=1; i <= m; i += 1) {
    arr.push(n * i)
  }
  return arr
}


// Test.assertDeepEquals(multiples(3, 5), [5, 10, 15])