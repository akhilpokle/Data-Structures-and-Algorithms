let arr = [0,1,2,3,0];

function partition(arr,low,high){
  let pivot = arr[high];
  let idx = low;
  for(let i=low;i<high;i++){
    if(arr[i]<=pivot){
      let temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
      idx++;
    }
  }
  let temp = arr[idx];
  arr[idx] = arr[high];
  arr[high] = temp;
  return idx;
}

function quickSelect(arr,low,high,k){
  if(low>high) return;
  let part = partition(arr,low,high);
  if(part+1 == k){
    return part;
  }
  if(part<k){ 
    return quickSelect(arr,part+1,high,k);
  }else{
    return quickSelect(arr,low,part-1,k);
  }
}

let res = quickSelect(arr,0,arr.length-1,4);
console.log(arr[res]);
