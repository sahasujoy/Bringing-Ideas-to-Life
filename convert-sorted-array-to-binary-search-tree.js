/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;
    let mid = Math.floor(nums.length / 2);

    let root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid)); 
    root.right = sortedArrayToBST(nums.slice(mid + 1)); 

    return root;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let nums = [-10,-3,0,5,9];
console.log(nums.slice(4));
console.log(sortedArrayToBST(nums));