/**
check whether the given string in a subsequence of the plaintext alphabest

Example

- for s = "effg" or s = "cdce", the output should be FALSE
- for s = "ace" or s = "bxz", the output should be TRUE
*/
function alphabetSubsequence(str) {
    let i = 1
    while(i < str.length) {
        if((str[i].charCodeAt(0) - str[i-1].charCodeAt(0)) > 0 ) {
            i = i + 1
        } else {
            return false
        }
    }
    return true
}