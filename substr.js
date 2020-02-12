'use strict'

/*
Petit exercise pour nous les gars. 

Given a string, find the length of the longest substring without repeating characters.

Example:
Input: abcabcbb
Ouput: 3

Input: bbbbbb
Output: 1

Input: pwwkew
Ouput: 3
*/

function longestSubstr(str) {
      console.log(`string = ${str}`)
      let strArray = str.split('');
      let highestLength = 1;
      let start = 0;
      let tmp_array = []

      tmp_array = strArray.slice(start,1);

      for (let i = 1; i < strArray.length; i++) {
            //tmp_array.push(strArray[i]);
            console.log(tmp_array);
            if(!tmp_array.includes(strArray[i])) {
                  tmp_array.push(strArray[i]);
                  if (tmp_array.length > highestLength)
                        highestLength = tmp_array.length
            }else{
                  start = i;
                  tmp_array = strArray.slice(start,i);
            }
      }
      console.log(tmp_array.join(''));
      console.log(highestLength);
}

longestSubstr('abcabcbb');
longestSubstr('bbbbbb');
longestSubstr('pwwkewraa');



