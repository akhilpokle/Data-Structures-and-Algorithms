/**************************************************************************************************************************
In a binary matrix (all elements are 0 and 1), every row is sorted in ascending order (0 to the left of 1). 
Find the leftmost column index with a 1 in it.

Example 1:

Input:
[[0, 0, 0, 1],
 [0, 0, 1, 1],
 [0, 1, 1, 1],
 [0, 0, 0, 0]]
Output: 1
Example 2:

Input:
[[0, 0, 0, 0],
 [0, 0, 0, 0],
 [0, 0, 0, 0],
 [0, 0, 0, 0]]
Output: -1

****************************************************************************************************************************/


var leftMostColumnWithOne = function(arr) {
    let m = arr.length;
    let n = arr[0].length;
    let row = 0;
    let col = n;
    
    let left = 0;
    let right = n;
    
    while(row<m){
        let left = 0;
        while(left<right){
            let mid = Math.floor((left+right)/2);
            if(arr[mid] == 1){
                right = mid;
            }else{
                left = mid+1;
            }
        }
        col = left;
        row++;
    }
    
    return col == n? -1 : col;
}
