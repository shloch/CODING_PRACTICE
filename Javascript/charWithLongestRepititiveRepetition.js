/*
For a given string s find the character c (or C) with
 longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there 
are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]

===============================================

abbbbb
[ 'b', 5 ]

cbdeuuu900
[ 'u', 3 ]
*/

function longestRepetition(s) {
  if(s.length == 0) {
    return ["",0]
  } else if (s.length == 1){
    return [s,1]
  } else {
    let maxDetected = 1
    let presentChar = ''
    let presentCount = 0
    let answer = [s[0], 1] //first Character
    for(let i = 0; i < s.length -1; i++) {
     
      presentChar = s[i]
      presentCount = 1
      for(let j = i+1; j < s.length; j++ ) {
        if(s[j] == s[i]) {
          presentCount += 1
        } else {
          break
        }
      }
      if(presentCount > maxDetected) {
        maxDetected = presentCount
        answer[0] = presentChar
        answer[1] = maxDetected
      } 
    }
    return answer
  }
}

