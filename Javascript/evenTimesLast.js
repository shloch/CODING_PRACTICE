
/*
codewars ===> https://www.codewars.com/kata/5a1a9e5032b8b98477000004


Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0.
*/
function evenLast(numbers) {
  let evenSum = 0
  
  if(numbers.length === 0) {
    return 0
  } else {
    for(let index in numbers) {
      if(index % 2 === 0) {
        evenSum += numbers[index]
      }
    }
    
    return evenSum * numbers[numbers.length -1]
  }
}

/*
METHOD 2
*/

function evenLast2(numbers) {
  let evenSum = 0
  numbers.filter((val, idx) => {
    if(idx % 2 == 0) evenSum += val
  })
  return evenSum * numbers[numbers.length-1]
}