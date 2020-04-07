/*********************************************************************************************************************
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

***********************************************************************************************************************/



var invertTree = function(root) {
    return dfs(root);
};

function dfs(root){
    if(root == null) return null;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    dfs(root.left);
    dfs(root.right);
    return root;
}
