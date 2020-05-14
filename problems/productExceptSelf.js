/********************************************************************************************************************************/

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the
elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits
in a 32 bit integer.

Note: Please solve it without division and in O(n).

**********************************************************************************************************************************


var productExceptSelf = function(nums) {
    let res = [];
    let left = 1;
    let right = 1;
    for(let i=0;i<nums.length;i++){
        res[i] = left;
        left = left*nums[i];
    }
    
    for(let i=nums.length-1;i>=0;i--){
        res[i] = right*res[i];
        right = right*nums[i];
    }
    return res;
};
