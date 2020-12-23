
/*
a list of numbers goes in and you need to return the smallest number 
which isn't a factor of any of the numbers -- [1,3,5,7] would be 2 
since 2 is the smallest number that none of those are evenly divisible by
[5, 3, 6, 7, 9] is 4 since 6 is divisible by 2 and 3 and a few other
 numbers are divisible by 3 but none of them are divisible by 4 so 4 is the smallest number
[1,2,3,4,5,6,7] would be 8 since that is the smallest number none of them are divisible by
*/
function avoidObstacles(nums) {
    let nonDivisable = 0
    let verify = 2
    let foundAnswer = false
    while (foundAnswer != true) {
        for(let i of nums) {
            //console.log(`i=${i}`)
            const mod = i % verify
            if(mod != 0) {
                //console.log(`math = ${i % verify != 0}`)
                //console.log(`i%verify ==> ${i}%${verify} = ${mod}`)
                nonDivisable += 1
                
            } 
        }
        if(nonDivisable == nums.length) {
            foundAnswer = true
        } else {
            verify += 1
            nonDivisable = 0
        }
    }
    
    return verify
    
}

avoidObstacles([5, 3, 6, 7, 9]);