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
  for(let i=0;i<string.length;){
    let char = string[i];
    let count = 0;
    i++;
    while(i<string.length && parseInt(string[i])>=1 && parseInt(string[i])<=9){
      count = parseInt(count * 10) + parseInt(string[i]);
      i++;
    }
    while(count>0){
      res+= char;
      count--;
    }
  }
  return res;
} 

let compress = encode("aaabbbccccccccccccd");
console.log(compress);
let res = decode(compress);
console.log(res);
