/*************************************************************************************************************************
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

*****************************************************************************************************************************/




var levelOrder = function(root) {
  if (!root) return [];

  const res = [];
  const q = [];
  q.push(root);

  while(q.length) {
    const lvl = [];
    const size = q.length;

    for (let i = 0; i < size; i++) {
      const node = q.shift();
      lvl.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(lvl);
  }
  return res;
};
