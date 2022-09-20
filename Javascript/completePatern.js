/*
KATA = https://www.codewars.com/kata/5572f7c346eb58ae9c000047

You have to write a function pattern which returns the following Pattern(See
Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
1
22
333
....
.....
nnnnnn
Examples:
pattern(5):

1
22
333
4444
55555
*/




function pattern(n){
     var output="";
        // Happy Coding ^_^
          if(n < 1) return ""
          for(let i = 1; i <= n; ++i) {
            let limit = 1
            while(limit <= i) {
                output += i
                limit++
            }
            if (i != n) output += '\n'
          }
     //console.log(output)
     return output;
}
