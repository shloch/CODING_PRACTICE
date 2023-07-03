/**
 *
 * KATA -- https://www.codewars.com/kata/5783ef69202c0ee4cb000265/train/javascript
 *
 *
 *JavaScript's indexOf does not work with arrays as input.
 This is because [1,2] === [1,2]
  will return false in JavaScript. Many other
  languages have similar quirks.

However, sometimes it is useful to search for an Array. Write a function that looks
 for an array within a two-dimensional array and returns the index of the first
 matching element. If there is no match, your function should return -1.

See some examples:

var arrayToSearch = [[1,2],[3,4],[5,6]];
var query = [1,2]; // => 0
query = [5,6]; // => 2
query = [9,2]; // => -1
You will be required to validate the inputs on the following criteria:

each element of the array to be searched should be an array;
each sub-array in the two-dimensional array should be of length two; and
query should be an array of length two.
If the inputs are not valid you should throw an Error.

See some examples:

var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
arrayToSearch = [1,2,3,4,5,6]; // => throw Error
arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
var query = [1,2]; // => valid input
query = 5; // => throw Error
query = [9,2,1]; // => throw Error
 */


const searchArray = function (arrayToSearch, query) {
  let answer = -1;
  if (Array.isArray(query)) {
    if (query.length === 2) {
      for (let idx = 0; idx < arrayToSearch.length; idx++) {
        if (Array.isArray(arrayToSearch[idx])) {
          if (arrayToSearch[idx].length === 2) {
            if (query.join('') === arrayToSearch[idx].join('')) {
              answer = idx;
              break;
            }
          } else {
            throw new TypeError('InvalidSubArrayLength');
          }
        } else {
          throw new TypeError('InvalidarrayToSearch2dimensionalError');
        }
      }
    } else {
      throw new Error('InvalideQueryLength');
    }
  } else {
    throw new Error('QueryNotArrayError');
  }
  return answer;
};
