// https://www.themathdoctors.org/counting-divisors-of-a-number/

function countDivisors(number){
    let count = 0
    for(let i=1; i <= number; i++){
        if(number % i == 0){
            count++
        }
    }
    console.log(`number = ${number}, count = ${count}`)
    return count
}
countDivisors(10)
countDivisors(6)
countDivisors(1000000000)
