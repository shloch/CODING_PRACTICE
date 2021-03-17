function SieveOfEratosthenes(n, given) {
        
      var integers = [];
      //console.log(`integers length = ${n}`)
      for (var i = 2; i < n+1; i++) {
              integers[i] = true;
      }

      for (var p = 2; p*p <= n; p++) {
              if (integers[p] == true) {
                      for (var i = p * 2; i <= n; i += p) {
                              integers[i] = false;
                      }
              }
      }
      return Search(integers, given)
}


function Search(arr, numberToFind) {
  let start = 0;
  let end = arr.length - 1;
  var answer = 0
  const EXTRA_MILE = 70

  let middle = Math.floor((start + end) / 2);

  if (numberToFind < middle) {

    for (var p = 2; p <= middle; p++) {
            //console.log(`p = ${p}`)
            if (arr[p] == true) {

              if(p > numberToFind) {
                return p
              }
            }
    }
  } else {
    for (var p = middle; p <= end; p++) {

            //console.log(`p = ${p}`)
            if (arr[p] == true) {
              
              if(p > numberToFind) {
                return p
              }
            }
    }
  }

}



function nextPrime(n){
  //console.log('n = '+n)
  const EXTRA_MILE = 70
  let answer = SieveOfEratosthenes(n+EXTRA_MILE, n)
  //console.log(`answer = ${answer}`)
  return answer
}

nextPrime(8009)