function partition(arr,low,high){
  let pivot = arr[high];
  let idx = low;
  for(let j=low;j<high;j++){
    if(arr[j]<pivot){
      swap(arr,idx,j);
      idx++;
    }
  }
  swap(arr,idx,high);
  return idx;
}

function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr,low,high){
  if(low<high){
  let part = partition(arr,low,high);
  quickSort(arr,low,part-1);
  quickSort(arr,part+1,high);
  }
}

let arr = [-11,6,-4,5,2,0,12,5,-42];

quickSort(arr,0,arr.length-1);

console.log(arr);
