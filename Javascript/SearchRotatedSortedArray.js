narySearch = function (arr, x, start, end) { 
       
    
    //let first = arr[0]
    //let last = arr[arr.length-1]
    if (x < start && x > end) {
        return -1
    }
    
    // Base Condition 
    //if (start > end) return false; 
   
    // Find the middle index 
    let mid=Math.floor((start + end)/2); 
   
    // Compare mid with given key x 
    if (arr[mid]===x) return arr.indexOf(x); 
          
    // If element at mid is greater than x, 
    // search in the left half of mid 
    
    if(end > x && x < mid)  
        return binarySearch(arr, x, mid, end); 
    else
        return binarySearch(arr, x, start, mid); 
} 
var search = function(nums, target) {
    
    let answer = binarySearch(nums, target, 0, nums.length-1)
    return answer
};


