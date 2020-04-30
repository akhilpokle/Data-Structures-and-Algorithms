var binarySearch = function(arr,key){
  arr.sort((a,b)=>a-b);
  let left = 0;
  let right = arr.length;
  while(left<right){
    let mid = left+Math.floor((right-left)/2);
    if(arr[mid] == key){
      return true;
    }else if(arr[mid]<key){
      left = mid+1;
    }else{
      right = mid;
    }
  }
  return false;
}

binarySearch([2,7,8,1,3,9,5,10,42,14],8);
