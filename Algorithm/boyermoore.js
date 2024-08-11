let string = "ATAATTACCAACATCATAATTACCAACATCATAATTACCAACATCATAATTACCAACATCATC";
let pattern = "ATC";

let M = pattern.length;
let N = string.length;
let skip;
let res = [];

let map = new Array(256);

for(let c = 0;c<256;c++){
  map[c] = -1;
}

for(let j=0;j<M;j++){
  map[pattern[j].charCodeAt(0)] = j;
}

for(let i=0;i<=N-M;i+=skip){
  skip=0;
  for(let j = M-1;j>=0;j--){

    if(pattern[j] != string[i+j]){
      skip = Math.max(1,j-map[string[i+j].charCodeAt(0)])
      break;
    }
  }
  if(skip == 0){
    res.push(i);
    skip++;
  }
}

console.log(res);
