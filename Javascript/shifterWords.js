
/*
You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees, can be read, although somitimes in a different way. So, uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M".

We will call a word "shifter" if it consists only of these letters. After turning the sheet, this word can also be read, although in a different way. So, the word "WOW "turns into the word "MOM". On the other hand, the word "HOME" is not a shifter.

Find the number of unique shifter words in the input string (without duplicates). String contains only uppercase letters.

Examples
shifter("SOS IN THE HOME") === 2 // shifter words are "SOS" and "IN"
shifter("WHO IS SHIFTER AND WHO IS NO") === 3 // shifter words are "WHO", "IS", "NO"
shifter("TASK") === 0 // no shifter words
shifter("") === 0 // no shifter words in empty string
*/

function shifter(s){
  if(s.length == 0) return 0
  
  const s2 = [...(new Set(s.split(' ')))]
  let base = ["H", "I", "N", "O", "S", "X", "Z", "M", "W"]
  let counter = 0
  const ans = s2.forEach(word =>{
    let checkingLetters = word.split('').every(letter =>base.includes(letter))
    if(checkingLetters) counter++
  })
  
  //console.log(counter)
  return counter
}