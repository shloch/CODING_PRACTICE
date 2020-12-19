/**
Given an array of integers, for each position i, search among the previous positions 
for the last (from the left) position that contains a smaller value. Store that value at the position i 
in the answer. If no such value can be found, store -1 instead.

EXAMPLE
for items = [3,5,2,4,5], the output should be [-1,3,-1,2,4]
*/
function arrayPreviousLess(nums) {
    const answer = [-1]
    for(let i = 1; i < nums.length; i ++ ) {
        let countSmalls = 0
        for(let j=i-1; j>=0; j--) {
            if(nums[j] < nums[i]) {
                answer.push(nums[j])
                countSmalls += 1
                break
            }
        }
        if(countSmalls == 0) {
            answer.push(-1)
        }
    }
    //console.log(answer)
    return answer
}

const nums = [3, 5, 2, 4, 5]
//answer ==> [-1, 3, -1, 2, 4]
arrayPreviousLess(nums)