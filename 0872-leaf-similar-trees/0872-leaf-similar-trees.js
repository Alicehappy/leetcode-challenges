/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

var dfs = function (root, leaf) {
    if (!root) return;
    if (!root.left && !root.right) {
        leaf.push(root.val);
    } else {
        // Pass `leaf` explicitly in recursive calls
        dfs(root.left, leaf);
        dfs(root.right, leaf);
    }

    return leaf;
};

var leafSimilar = function (root1, root2) {
    let leaf1 = [];
    let leaf2 = [];

    dfs(root1, leaf1);
    dfs(root2, leaf2);

    return leaf1.join("_") === leaf2.join("_");
};