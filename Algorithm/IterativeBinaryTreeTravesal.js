    var inorderTraversal = function(root) {
        let stack = [], res = [];
        if (root === null) {
            return res;
        }

        let curr = root;
        while(curr !== null || stack.length) {
            while (curr !== null) {
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();
            res.push(curr.val);
            curr = curr.right;        
        }
        return res;
    };
