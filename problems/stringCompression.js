var encode = function(string){
  let chars = string.split("");
  let res = "";
  for(let i=0;i<chars.length;i++){
      let count = 1;
      let char = chars[i];
      while(i<chars.length-1 && chars[i] == chars[i+1]){
        count++;
        i++;
      }
      res += char + count;
  }
  return res;
}

var decode = function(string){
  let res = "";
  let chars = string.split("");
  for(let i=0;i<chars.length;i+=2){
    let char = chars[i];
    let count = chars[i+1];
    while(count > 0){
      res += char;
      count--;
    }
  }
  return res;
}

let compress = encode("aaabbbcccccd");
console.log(compress);
let res = decode(compress);
console.log(res);
