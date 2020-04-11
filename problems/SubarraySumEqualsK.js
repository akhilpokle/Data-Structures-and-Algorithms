/**************************************************************************************************************************
Given an array of integers and an integer k, 
you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2

***************************************************************************************************************************/

var subarraySum = function(nums, k) {
  let sum = 0
  let count = 0
  const map = new Map()
  for (let i = 0; i < nums.length; i++){
    if (!map.has(sum)){
      map.set(sum, 1)
    } else {
      map.set(sum, map.get(sum) + 1)
    }
    
    sum += nums[i]
    
    if (map.has(sum-k)){
      count += map.get(sum-k)
    }
  }
  return count
};
