var kthSmallest = function(root, k) {
    let val;
    function inorder(root){
        if(root == null) {
            return;
        }

        inorder(root.left);
        k--;
        
        if(k == 0) {
            val = root.val;
            return;
        }
        
        inorder(root.right);
    }
    inorder(root);
    return val;
};
