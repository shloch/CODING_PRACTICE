

/*
https://www.codewars.com/kata/598057c8d95a04f33f00004e

Build a function that can get all the integers between two given numbers.

Example:

(2,9)

Should give you this output back:

[ 3, 4, 5, 6, 7, 8 ]

If startNum is the same as endNum, return an empty array.
*/

function range(startNum, endNum)   
{  
   const array = []
   let loop = startNum + 1
   
   while(loop < endNum){
     array.push(loop)
     loop = loop +1
   }
  return array
};  