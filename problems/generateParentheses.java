/*********************************************************************************************************************************

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

**********************************************************************************************************************************/

class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<>();
        dfs(res,n,"",0,0);
        return res;
    }
    
    public void dfs(List<String> res,int n,String curr,int left,int right){
        if(curr.length() == 2*n){
            res.add(curr);
            return;
        }
        if(left<n){
            dfs(res,n,curr+"(",left+1,right);
        }
        if(right<left){
            dfs(res,n,curr+")",left,right+1);
        }
    }
}
