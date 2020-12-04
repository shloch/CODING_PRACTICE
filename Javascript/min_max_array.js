/*

KATA ===> https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript

In this Kata, you will be given an array of unique elements, 
and your task is to rerrange the values so that the first max 
value is followed by the first minimum, followed by second 
max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max 
is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!
*/


function solve(arr){
    //..
  /*
  [15, 11, 10, 7, 12] ==>> [15, 12, 11, 10, 7, 2]
  */
  
  const sortedarr = arr.sort((a, b) => {return b-a});
  const answer = []
  
  let begin = 0
  let end = sortedarr.length-1
  if(sortedarr.length % 2 == 1){
    while(begin != end){
      answer.push(sortedarr[begin])
      answer.push(sortedarr[end])
      begin = begin + 1
      end = end - 1
    }
    answer.push(sortedarr[end])
   
  }
  
  if(sortedarr.length % 2 == 0){
    while(begin < end){
      answer.push(sortedarr[begin])
      answer.push(sortedarr[end])
      begin = begin + 1
      end = end - 1
    }
    
  }
  return answer
  
};