/*
JavaScript Algorithms and Data Structures Projects: Caesars Cipher
https://en.wikipedia.org/wiki/ROT13

One of the simplest and most widely known ciphers is a
Caesar cipher, also known as a shift cipher. In a shift
cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values
 of the letters are shifted by 13 places.
  Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and
returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic
character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck.
Try to pair program. Write your own code.
*/

function rot13Dict() {
  const uppercaseRot13 = {};

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (let i = 13; i < alphabet.length; i += 1) {
    uppercaseRot13[alphabet[i]] = alphabet[i - 13];
  }
  for (let i = 0; i < 13; i += 1) {
    uppercaseRot13[alphabet[i]] = alphabet[i + 13];
  }
  // console.log(uppercaseRot13);
  return uppercaseRot13;
}

function rot13(str) {
  const dict = rot13Dict();
  const answer = [];
  str.split('').forEach((char) => {
    if (char in dict) {
      answer.push(dict[char]);
    } else {
      answer.push(char);
    }
  });
  // console.log(answer.join(''));
  return answer.join('');
}

// Change the inputs below to test
rot13('SERR PBQR PNZC');
rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');
