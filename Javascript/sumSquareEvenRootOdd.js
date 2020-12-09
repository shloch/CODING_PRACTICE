/**

KATA ==> https://www.codewars.com/kata/5a4b16435f08299c7000274f/train/javascript

Complete the function that takes a list of numbers (nums),
 as the only argument to the function. Take each number 
 in the list and square it if it is even, or square root
  the number if it is odd. Take this new list and return
   the sum of it, rounded to two decimal places.

The list will never be empty and will only contain 
values that are greater than or equal to zero.

Good luck!
*/
const sumSquareEvenRootOdd = ns => {
 
  let newArr = []
  for(let i of ns) {
    if(i % 2 === 0) {
      newArr.push(i**2)
    } else {
      newArr.push(i**0.5)
    }
  }
  return +newArr.reduce((acc, n) => acc + n).toFixed(2)
  
};