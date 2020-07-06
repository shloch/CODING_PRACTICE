/*
Move the first letter of each word to the end of it, then add "ay"
 to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str) {
  const answer = [];
  str.split(' ').forEach((word) => {
    if (word === '!' || word === '?') {
      answer.push(word);
    } else {
      answer.push(word.substring(1) + word[0] + 'ay');
    }
  });
  return answer.join(' ');
}


// ---------- sample test ---------
//  Test.assertEquals(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
//  Test.assertEquals(pigIt('This is my string'), 'hisTay siay ymay tringsay')
