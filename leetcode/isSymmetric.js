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
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var isSymmetric = function(root) {
   return  dig(root.left,root.right)

};
function dig(left,right){
    if (left==null&&right!=null){
        return false
    }
    if (left!=null&&right==null){
        return false
    }
    if (left==null&&right==null){
        return true
    }
    if (left!=null&&right!=null){
        if (left.val == right.val){
            return dig(left.left,right.right)&&dig(left.right,right.left)
        }else {
            return false
        }
    }

}

let node = new TreeNode(1,new TreeNode(1,new TreeNode(2),new TreeNode(1)),new TreeNode(1,new TreeNode(1),new TreeNode(2)))

console.log(isSymmetric(node))
