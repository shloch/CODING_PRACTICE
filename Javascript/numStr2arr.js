/*
kata = https://www.codewars.com/kata/5783d8f3202c0e486c001d23
Convert an array of strings to array of numbers
*/

function toNumberArray(stringarray){
        return stringarray.map(str => +str)
}
