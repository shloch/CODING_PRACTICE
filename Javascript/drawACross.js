/**
The aim of this kata is to write function drawACross / draw_a_cross which returns a cross shape with 'x' characters on a square grid of size and height of our sole input n. All non-'x' characters in the grid should be filled with a space character (" ").

For example for drawACross(7) / draw_a_cross(7), the function should draw the following grid:

x     x
 x   x 
  x x  
   x   
  x x  
 x   x 
x     x
The arms of the cross must only intersect through one central 'x' character, and start in the corner of the grid, so for even values of n, return "Centered cross not possible!"

If n<3, function should return "Not possible to draw cross for grids less than 3x3!"
*/

function filEmptyArray(size, start, end) {
  const arr = []
  for(let i = 0; i < size; i++) {
    arr.push(" ")
  }
  arr[start] = "x"
  arr[end] = "x"
  return arr
}

function drawACross(n) {
  if ( n < 3) return "Not possible to draw cross for grids less than 3x3!"
  if(n % 2 == 0) return "Centered cross not possible!"
  let star = ""
  let star2 = []
  
  let start = 0
  let end = n-1
  let loop = 0
  while(loop < n){
    const line = filEmptyArray(n, start, end).join('')
    start = start + 1
    end = end - 1
    loop = loop + 1
    star = star + "\n" + line
    star2.push(line)
    
  }
  return star.substring(1,star.length)
  
}