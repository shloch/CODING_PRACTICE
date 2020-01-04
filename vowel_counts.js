/*
Let's count the numbers of words having a second vowels in a 
string! For a given string, write a function that returns the number 
of words having a second vowel.

Example :
 countVowels("range represented by a node is completely inside the given range") ==> 7 
 countVowels("help me god") ==> 0 ; no words have a second vowel
*/


function countVowels(string){
  let total = 0;
  string.split(" ").forEach((word) => {
    if (count(word) > 1) total++
  });
  return total;
}

function count(givenStr) {
    let count = 0;  
    for(let i = 0; i < givenStr.length; i++){
      if('aeiouAEIOU'.includes(givenStr.charAt(i)) ){
        count ++;
      }
    }
    return count;
}


// ---------- testing sample ------------------------
Test.assertEquals(countVowels("my first kata"),1, "The string has 1 word containing a second vowels");
Test.assertEquals(countVowels("Once upon a time"),3, "Should account for upper case elements");
Test.assertEquals(countVowels(""),0, "Empty string");
