/**
given a positive num, return the sum of all ODD FIBONACCI numbers that  
are less than or equal to num

The first two numbers in the Fib sequence are 1 and 1. 
The first six numbers of the fib sequence are 1,1,2,3,5 and 8

example

sumOddFibonacciNumbers(10) should return 10
sumOddFibonacciNumbers(1000) should return 1785
sumOddFibonacciNumbers(4000000) should return 4613732

*/

function isOddAndLessThanEq(x, arr) {
  const answer = []
  for(let i = 0; i <= arr.length; i++) {
    if(arr[i] <= x) {
      if(arr[i] % 2 === 1) {
        answer.push(arr[i])
      }
    }
  }
  return answer
}
function sumOddFibonacciNumbers(num) {
  
  const f = [0,1]   
  let i = 2
  while( i <= num)
  { 
         let fibcalc = f[i-1] + f[i-2]
         f[i] = fibcalc
         i = i + 1
         
  } 
  const nums2sum =  isOddAndLessThanEq(num, f); 
  return nums2sum.reduce(function (sum, i) {
    return sum + i
  }, 0)

}


sumOddFibonacciNumbers(10)