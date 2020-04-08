/*****************************************************************************************************************
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
*****************************************************************************************************************/

var groupAnagrams = function(strs) {
    let map = new Map()
    
    for (let current of strs){
        let chars = current.split('')
        chars.sort()
        let sorted = chars.join('')
        if (!map.has(sorted)) {
            map.set(sorted, [])
        }
        map.get(sorted).push(current)
    }
    
    return Array.from(map.values())
};
