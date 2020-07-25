/*
Given an array of one's and zero's that represents a
 positive binary number convert the number to two's complement value.

Two's complement is the way most computers represent
 positive or negative integers. The most significant bit is negative.

Examples:

-8 4 2 1

[1,1,1,1] = -1

[1,0,0,0] = -8

[1,1,0,1] = -3

To get the two's complement negative notation
 of an integer, you take the number in binary.

You then invert the digits, and add one to the result.

For example:

[0,0,1,0] = 2 in base 10

[1,1,0,1] <- Flip the bits

Add 1

[1,1,1,0] = -2

However, the arrays can have varying lengths, not just limited to 4.
*/


function positiveToNegative(bitsArray) {
  // reverse bits
  bitsArray.forEach((bit, idx) => {
    bitsArray[idx] = (bit === 0) ? 1 : 0;
  });

  // twos complement operation
  const answer = (parseInt(bitsArray.join(''), 2) + 1).toString(2).split('');
  while (answer.length > bitsArray.length) {
    answer.shift();
  }

  // converting bit strings to integers
  answer.forEach((bit, idx) => {
    answer[idx] = +bit;
  });
  return answer;
}


// ------------ sample tests ------------------------
// describe("Tests", () => {
//   it("Fixed Tests", () => {
//     assert.deepStrictEqual(positiveToNegative([0, 0, 0, 0]), [0, 0, 0, 0]);
//     assert.deepStrictEqual(positiveToNegative([0, 0, 1, 0]), [1, 1, 1, 0]);
//     assert.deepStrictEqual(positiveToNegative([0, 0, 1, 1]), [1, 1, 0, 1]);
//     assert.deepStrictEqual(positiveToNegative([0, 1, 0, 0]), [1, 1, 0, 0]);
//   });
// });
