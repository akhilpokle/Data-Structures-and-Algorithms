/***********************************************************************************************************************
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

****************************************************************************************************************************/




var findDuplicates = function(nums) {
    var res = [],
        index,
        i;
    
    for(i = 0; i < nums.length; i++){
        index = Math.abs(nums[i]) - 1;
        
        if(nums[index] < 0)
            res.push(index + 1);
        else    
            nums[index] *= -1;
    }
    
    return res;
};
