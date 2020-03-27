/*****************************************************************************************************************
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]

*****************************************************************************************************************/

var restoreIpAddresses = function(s) {
    let res =[]
    dfs(s,0,res,[],4,s.length)
    //console.log(res)
    return res
};

function dfs(s,ind,res,temp,seg,l){
    
    if ((seg===0 && ind < l) || (seg!==0 && ind >= l )) return
   // console.log(seg,ind,temp)
    if (seg===0 && ind === l){
        res.push(temp.slice().join('.'))
        return
    }
    
    for (let i=1;i<=3;i++){
        if (ind+i > l) break
        let chunk = s.substring(ind,ind+i)
        if (isValid(chunk)){
            temp.push(chunk)
            dfs(s,ind+i,res,temp,seg-1,l)
            temp.pop()            
        }
    }
}

function isValid(str){
    if (str.length > 1 && str[0] === '0') return false
    if (parseInt(str) <= 255) return true
    return false
}
