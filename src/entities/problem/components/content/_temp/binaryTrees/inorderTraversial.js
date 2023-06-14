// https://leetcode.com/problems/binary-tree-inorder-traversal/
// https://www.youtube.com/watch?v=g_S5WuasWUE

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  function inorder(root) {
    if (root === null) {
      return;
    }

    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  }

  const result = [];

  inorder(root);

  return result;
};

// Обход с помощью цикла
var _inorderTraversal = function (root) {
  // ???
};
