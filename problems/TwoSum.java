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
      for(int j=1;j<nums.length;j++){
        if(nums[i]+nums[j] == target) return new int[]{i,j};
      }
    }
    return new int[]{-1,-1};;
  }

  //Sorting O(nlogn) time O(1) space
  public int[] twoSum(int[] nums,int target){
    int left = 0;
    int right = nums.length-1;
    Arrays.sort(nums);
    while(left<right){
      if(nums[left]+nums[right] == target) return new int[]{i,j};
      else if(nums[left]+nums[right] > target) right--;
      else start++;
    }
    return new int[]{-1,-1};
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
