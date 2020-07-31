/*
Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. 
Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.

EXERCISE --> https://www.codewars.com/kata/5959ec605595565f5c00002b/train/javascript
*/

function reverseBits (n) {
  const binary = n.toString(2)
  const reverse = binary.split('').reverse().join('')
  return parseInt(reverse, 2)
}