
/*
Kata  = https://www.codewars.com/kata/57f609022f4d534f05000024
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
    const twoNumbers = Array.from(new Set(numbers))
    
    
    let count = 0
    for(let i of numbers) {
      if(i === twoNumbers[0])  count = count + 1
      if(count > 1) break
    }
    
     if(count > 1)
       return twoNumbers[1]
     return twoNumbers[0]
  }