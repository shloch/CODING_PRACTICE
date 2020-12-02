/*
In mathematics, Pascal's triangle is a triangular array of the binomial
coefficients expressed with formula (n k) = n!/(n-k)!, where n denotes
 a row of the triangle, and k is a position of a term in the row.

Pascal's Triangle

You can read Wikipedia article on Pascal's Triangle for more information.

Task
Write a function that, given a depth n, returns n top rows of Pascal's Triangle
flattened into a one-dimensional list/array.

n guarantees that terms of the Triangle won't overflow.

Example:
n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
*/
function pascalsTriangle(n) {
  /*
  let obj = {
    1: [1]
    2: [1,1]
    3: [1,2,2]
  }
  */
  if (n === 1) return [1];
  if (n === 2) return [1, 1, 1];

  const obj = {
    1: [1],
    2: [1, 1],
  };

  for (let level = 3; level <= n; ++level) {
    obj[level] = [1];
    for (let i = 1; i <= level - 2; ++i) {
      const sum = obj[level - 1][i] + obj[level - 1][i - 1];
      obj[level].push(sum);
    }
    obj[level].push(1);
  }
  const answer = [];

  Object.keys(obj).forEach((key) => {
    answer.push(...obj[key]);
  });

  return answer;
}
