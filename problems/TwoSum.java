/********************************************************************************** 
* 
* Given an array of integers, find two numbers such that they add up to a specific target number.
* 
* The function twoSum should return indices of the two numbers such that they add up to the target, 
* where index1 must be less than index2. Please note that your returned answers (both index1 and index2) 
* are not zero-based.
* 
* You may assume that each input would have exactly one solution.
* 
* Input: numbers={2, 7, 11, 15}, target=9
* Output: index1=1, index2=2
* 
*               
**********************************************************************************/

public class Solution {

  //brute force O(n^2) time O(1) space
  public int[] twoSum(int[] nums,int target){
    for(int i=0;i<nums.length-1;i++){
      for(int j=i;j<nums.length;j++){
        if(nums[i]+nums[j] == target) return new int[]{i,j};
      }
    }
    return new int[]{-1,-1};
  }

  //Sorting O(nlogn) time O(1) space
  public int[] twoSum(int[] nums,int target){
    int[] nums2 = Arrays.copyOf(nums, nums.length);
	    	Arrays.sort(nums2);
	    	int a = 0, b = 0;
	    	int start = 0, end = nums2.length-1;
	    	//find two nums
	    	while(start<end){
	    		int sum = nums2[start] + nums2[end];
	    		if(sum < target)
	    			start++;
	    		else if(sum > target)
	    			end--;
	    		else{
	    			a = nums2[start]; b = nums2[end];
	    			break;
	    		}
	    	}
	    	//find the index of two numbers
	    	int[] res = new int[2];
	    	for(int i = 0; i < nums.length; i++){
	    		if(nums[i] == a){
	    			res[0] = i;
	    			break;
	    		}
	    	}
	    	if(a != b){
	    		for(int i = 0; i < nums.length; i++){
		    		if(nums[i] == b){
		    			res[1] = i;
		    			break;
		    		}
		    	}
	    	} else{
	    		for(int i = 0; i < nums.length; i++){
		    		if(nums[i] == b && i != res[0]){
		    			res[1] = i;
		    			break;
		    		}
		    	}
	    	}
	    	
	    	return res;
  }
  
  
  //using map O(n) time O(n) space
   public int[] twoSum(int[] nums,int target){
     Map<Integer,Integer> map = new HashMap<>();
        int[] res = new int[]{-1,-1};
        for(int i=0;i<nums.length;i++){
            if(map.containsKey(nums[i])){
                res[1] = i;
                res[0] = map.get(nums[i]);
            }else{
                map.put(target-nums[i],i);
            }
       }
     return res;
   }

}
