/*

Given a positive integer n: 0 < n < 1e6, remove the last
 digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, 
and if no such number exists, return null, a similar empty value, or -1.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9
*/

const prevMultOfThree = n => {
    if(n % 3 == 0) return n
    
    let numCopy = n
    while (numCopy % 3 != 0) {
      let numCopyArr = numCopy.toString().split('')
      numCopyArr.pop()
      numCopy = +numCopyArr.join('')
    }
    if (numCopy == 0)
      return null
    return numCopy
  }