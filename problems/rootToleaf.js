var sumNumbers = function(root) {
    return dfs(root,0);
};

function dfs(node,prev){
    if(node == null) return 0;
    if(node.left == null && node.right == null){
        return prev*10 + node.val;
    }
    
    let curr = prev*10 + node.val;
    
    return dfs(node.left,curr) + dfs(node.right,curr);
}
