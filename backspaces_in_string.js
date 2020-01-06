
// https://www.codewars.com/kata/backspaces-in-string/train/javascript
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
//  ""              ==>  ""

function cleanString(s) {
  const tmpArr = [...s.split('')];
  while (tmpArr[0] === '#') tmpArr.shift();
  while (tmpArr.includes('#')) {
    const index = tmpArr.indexOf('#');
    tmpArr.splice(index - 1, 2);
    while (tmpArr[0] === '#') tmpArr.shift();
  }
  return tmpArr.join('');
}
