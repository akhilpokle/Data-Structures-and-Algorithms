/*****************************************************************************************************************
Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

*******************************************************************************************************************/

var maxSubarray = function(arr,k){
  let max = 0;
  let windowSum = 0;
  let windowStart=0;
  for(let windowEnd=0;windowEnd<arr.length;windowEnd++){
      windowSum+=arr[windowEnd];
      if(windowEnd>=k-1){
        max = Math.max(windowSum,max);
        windowSum -= arr[windowStart];
        windowStart++;
      }
      console.log(windowSum,max);
  }
  return max;
};
