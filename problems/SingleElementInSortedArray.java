/**********************************************************************************************************************
You are given a sorted array consisting of only integers where every element appears exactly twice, 
except for one element which appears exactly once. Find this single element that appears only once.

Example 1:

Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: [3,3,7,7,10,11,11]
Output: 10
 

Note: Your solution should run in O(log n) time and O(1) space.

*************************************************************************************************************************/


class Solution {
	public int singleNonDuplicate(int[] nums) {
		int lo = 0;
		int hi = nums.length - 1;
		while(lo < hi){
			int mid = lo + (hi - lo)/2;
						   
			if(mid % 2 == 0){
				// mid is even
				if(nums[mid] == nums[mid + 1]){
					lo = mid + 2;
				}else{
					hi = mid;
				}
			}else{
				// mid is odd
				if(nums[mid] == nums[mid - 1]){
					lo = mid + 1;
				}else{
					hi = mid;
				}
			}

		}
		return nums[lo];
	}
}
