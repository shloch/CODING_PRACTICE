/**
Given an array of integers, find the pair of adjacent elements that has
the pargest product ad return that product

examples

inputArray = [3, 6, -2, -5, 7, 3], the output should be 21
7 and 3 produce the largest product
*/

function adjacentElementsProduct(nums) {
    let product = nums[0] * nums[1]
    for(let i = 1; i < nums.length; i++) {
        let tmpProduct = (nums[i] * nums[i-1])
        if(tmpProduct > product) {
            product = tmpProduct
        }
    }
    return product
}
