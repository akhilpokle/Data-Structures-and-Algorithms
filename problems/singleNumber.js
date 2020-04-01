/********************************************************************************************************************

Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

********************************************************************************************************************/

var singleNum = function(nums){
    let map = {}
    for(let i=0;i<nums.length-1;i++){
        if(map[nums[i]]) map[nums[i]] = false;
        else map[nums[i]] = true;
     }
     for(let [key, value] of Object.entries(map)){
         if(value) return key;
     }
     return -1;
}

/*************************************************************************************************************************/

var singleNum = function(nums){
    let res = 0;
    for(let i=0;i<nums.length-1;i++){
        res  = res ^ nums[i];
     }
     return res;
}
