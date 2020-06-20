var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let max = 0;
    let set = new Set();
    while(right<s.length){
        if(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }else{
            set.add(s[right]);
            right++;
            max = Math.max(max,set.size);
          //  console.log(set.size);
        }
    }
    return max;
};
