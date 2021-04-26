/*

kata = https://www.codewars.com/kata/59859f435f5d18ede7000050

Write a function that takes a string and returns an array containing 
binary numbers equivalent to the ASCII codes of the characters of the 
string. The binary strings should be eight digits long.

Example: 'man' should return [ '01101101', '01100001', '01101110' ]
*/


// -------- initial solution -----
function bringTo8char(str) {
  let _tmp = ''
  let difference = 8 - str.length
  for(let i = 0; i < difference; i++) {
    _tmp += '0'
  }
  return _tmp + str
}

function wordToBin(str){
  let array = []
  str.split('').forEach(char => {
    let conversion = char.charCodeAt(0).toString(2)
    array.push(bringTo8char(conversion))
  })
  //console.log(array)
  return array;
}

// -------- short form -----
function wordToBin(str){
  let array = []
  str.split('').forEach(char => {
    array.push(char.charCodeAt(0).toString(2).padStart(8, '0'))
  })
  return array;
}