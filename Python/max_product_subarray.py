# Given an integer array nums, find the contiguous
#  subarray (containing at least one number) which
#   has the largest sum and return its sum.

# Example:

# Input: [-2,1,-3,4,-1,2,1,-5,4],
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Follow up:

# If you have figured out the O(n) solution, try coding 
# another solution using the divide and conquer approach, 
# which is more subtle.

# EXERCISE ==> https://leetcode.com/problems/maximum-product-subarray/

### UNCOMPLETED SOLUTION


class Solution(object):
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        # if (len(nums) == 1):
        #     return nums[0] 
        # if (len(nums) == 2):
        #     if (nums[0] > nums[1]): 
        #         return nums[0]
        #     return nums[1]
        max = nums[0] * nums[1]
        
        for idx, num in enumerate(nums):
            subArr = nums[idx:-1]
            tmp_max = 0
            for idx2, num2 in enumerate(subArr):
        
            
            
            
                
        #return max
            