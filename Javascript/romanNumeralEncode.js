/*
============================================================================================
Create a function taking a positive integer as its parameter and returning a string containing 
the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with 
the left most digit and skipping any digit with a value of zero. In Roman numerals
 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as
  2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals
=====================================================================================*/

/**
GIVEN  A NUMBER 1235, THIS FUNCTION BREAKS IT DOWNS INTO MULTIPLES SEGMENTS LIKE THIS

SEGMENT 1 = 1000
SEGMENT 2 = 200
SEGMENT 3 = 30
SEGMENT 4 = 5
*/
function breakDown(numStr) {
  let size = numStr.length - 1
  let arr = [] 
  for(let idx in numStr) {
    let numberDigits = size - idx

    let i = 0
    let segment = numStr[idx]
    while(i < numberDigits) {
      segment += '0'
      i++
    }
    arr.push(segment)
  }
  console.log(`breakdown = ${arr}`)
  return (arr)
}


/**
GIVEN  A NUMBER 20, THIS CHECKS IF NUMBER IS MULTIPLE OF ONE OF THE 
REFERENCE ROMAN NUMERALS (const ref = [1,5,10,50,100,500,1000])
AND RETURNS AN OBJECT WITH 2 PARTS

answerObj = {isMultiple: true, arr: [10, 10]}
*/
function isMultipleOfRefNumbers(numStr, ref) {
  const answerObj = {'isMultiple': false, 'arr': []} // typical return for 20 => answerObj{isMultiple: true, arr: [10, 10]}

  for(let i = ref.length-1; i > 0; i--) {
    if(numStr % ref[i]  == 0) {
      const tmpRef = ref[i]
      const repetitions = numStr/ref[i]
      //console.log(`tmpRef = ${tmpRef}`)
      answerObj['isMultiple'] = true
      for(let i = 0; i < repetitions; i++) {
        answerObj['arr'].push(tmpRef)
      }
      break;
    } 
  }
  console.log(`isMultipleOfRefNumbers = {${answerObj.isMultiple}, ${answerObj.arr}}`)
  return (answerObj)
}


/**
DO THE MATHS BEHIND OTHER NUMBERS LIKE "13", '7', '8', '27' needing more than 1 Roman Representation

13 = XIII
7 = VII
8 = VIII
27 = XXVII
3 = III

*/
function buildOtherNumbers(numStr) {
  const ref = [1,5,10,50,100,500,1000]
  const arr = []

  let num = +numStr
  if(num < 4) {
          for(let j = 0; j < num; j++) arr.push('1')
  } else {

    let checkMultiples = isMultipleOfRefNumbers(numStr, ref)

    if(checkMultiples.isMultiple && checkMultiples.arr.length <= 3) {
      arr.push(...checkMultiples.arr)
      return arr
    }
    while(num != 0) {
      for(let i = 0; i < ref.length - 1; i++) {
        if(ref[i+1] > num) {
          arr.push(ref[i].toString())
          num = num % ref[i]
          //-----checks if the remainder of the division is multiple ------
          checkMultiples = isMultipleOfRefNumbers(num, ref)

          if(checkMultiples.isMultiple && checkMultiples.arr.length <= 3) {
            arr.push(...checkMultiples.arr)
            num = 0
          }
          //------------------------------------------------------------
          if(num < 4) {
            for(let j = 1; j < num; j++) arr.push('1')
          }
          break;
        }

      }
    }
  }
  console.log(`buildOtherNumbers = ${arr}`)
  return (arr)
}



function solution(number){
  console.log(`number = ${number}`)
  let symObj = {
    0: '',
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
    4: 'IV',
    9: 'IX',
    40: 'XL',
    90: 'XC',
    400: 'CD',
    900: 'CM'
  }
  
  let segments = breakDown(number.toString())
  let romanConstruct = ''
  
  for(let seg of segments) {
    if(seg in symObj) {
      romanConstruct += symObj[seg]
    } else {
      let tmpSegment = buildOtherNumbers(seg)
      for(let miniSeg of tmpSegment) {
        romanConstruct += symObj[miniSeg]
      }
    }
  }
  console.log(romanConstruct)
  return romanConstruct
}

//const ref = [1,5,10,50,100,500,1000]
//isMultipleOfRefNumbers('2000', ref)
solution(27)