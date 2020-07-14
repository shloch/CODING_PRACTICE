/*
Given a non negative integer number num. For every numbers i in
the range 0 ≤ i ≤ num calculate the number of 1's in their
 binary representation and return them as an array.

Example 1:

Input: 2
Output: [0,1,1]
Example 2:

Input: 5
Output: [0,1,1,2,1,2]
Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)).
But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function
like __builtin_popcount in c++ or in any other language.
Accepted

EXERCISE => https://leetcode.com/problems/counting-bits/
*/

// ----------- solution 1 ----------------
// var countBits = function(num) {
//     objlit = {}
//     for (let i=0; i <= num; i++) {
//         objlit[i] = i.toString(2).split('')
//     }
//     const ans = []
//     Object.keys(objlit).forEach(k => {
//         const tmpCount = objlit[k].reduce((counter, currentNumber)=> ('1' === currentNumber ? counter+1 : counter),0);
//         ans.push(tmpCount)
//     })
//     return ans
// };

// ----------- solution  (optimized ----------------

const countBits = function (num) {
  const ans = [];
  for (let i = 0; i <= num; i += 1) {
    const tmpCount = i.toString(2).split('').reduce((counter, currentNumber) => (currentNumber === '1' ? counter + 1 : counter), 0);
    ans.push(tmpCount);
  }

  return ans;
};
