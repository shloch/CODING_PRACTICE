/**
 * https://projecteuler.net/problem=6
 */

function sumOfSquares(limit) {
    let sum = 0
    for(let num = 1; num <= limit; num++) {
        sum += num ** 2
    }
    return sum
}

function squareOfSum(limit) {
    let sum = 0
    for(let num = 1; num <= limit; num++) {
        sum += num
    }
    return sum ** 2
}

console.log(`squareOfSum - sumOfSquares for 10= ${squareOfSum(10) - sumOfSquares(10)}`)

console.log(`squareOfSum - sumOfSquares for 100 = ${squareOfSum(100) - sumOfSquares(100)}`)