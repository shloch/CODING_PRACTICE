/*
Your task in this kata is to return a string that shows
if a letter of the input is uppercase or lowercase.
You should replace every uppercase letter with a 1 and
every lowercase letter with a 0.

Example:
binaryCase('Hello World!') ==> '10000 10000!'
*/

function binaryCase(str) {
  const arr = [];
  const arrStr = str.split('');
  for (const char of arrStr) {
    const ascii = char.charCodeAt(0);
    if (ascii > 96 && ascii < 123) {
      arr.push('0');
    } else if (ascii > 64 && ascii < 91) {
      arr.push('1');
    } else {
      arr.push(char);
    }
  }
  return arr.join('');
}

binaryCase('Hello World!');
/* ---------------test samples--------------------------
describe("Sample tests", function() {
  it("Tests", function() {
    Test.assertEquals(binaryCase('Hello World!'), '10000 10000!');
    Test.assertEquals(binaryCase('CodeWars'), '10001000');
    Test.assertEquals(binaryCase(''), '');
    Test.assertEquals(binaryCase('CoDeWaRs'), '10101010');
    Test.assertEquals(binaryCase('&§b$( _)$/%&(0'), '&§0$( _)$/%&(0');
  });
});
*/
