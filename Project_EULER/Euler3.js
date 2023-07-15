function findPrimeFactors(number) {
    const factors = [];
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      while (number % i === 0) {
        factors.push(i);
        number = number/ i;
      }
    }
  
    if (number > 1) {
      factors.push(number);
    }
  
    return factors;
  }
  
  const arr = findPrimeFactors(600851475143) 
  console.log(`Largest prime factor = ${arr[arr.length-1]}`)