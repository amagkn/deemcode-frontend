// https://leetcode.com/problems/binary-tree-preorder-traversal/
// https://www.youtube.com/watch?v=afTpieEZXck

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
var preorderTraversal = function (root) {
  function preorder(root) {
    if (!root) return;

    result.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }

  const result = [];

  preorder(root);

  return result;
};

// Обход с помощью цикла
var _preorderTraversal = function (root) {
  // ???
};
