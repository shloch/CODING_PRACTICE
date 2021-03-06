/*

kata =  https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. However, 
since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the 
last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "###
*/

// ------------------------------------------------
//         solution 1
// ------------------------------------------------
function maskify(cc) {
  if(cc.length > 4) {
    let last4 = ''
    for(let i=cc.length-4; i < cc.length; i++) {
      last4 += cc[i]
    }
    let mask = ''
    for(let j = 0; j < cc.length-4; j++) {
      mask += '#'
    }
    return mask+last4
  } else
    return cc
}

// ------------------------------------------------
//         solution 2
// ------------------------------------------------
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
}
