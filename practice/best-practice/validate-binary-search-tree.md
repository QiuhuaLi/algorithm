* [验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/solution/yan-zheng-er-cha-sou-suo-shu-by-leetcode-solution/)
关键点：
1. 二叉搜索树的概念：左子树小于根节点；右子树大于根节点
2. 二叉树的中序遍历（左中右）遍历结果是升序

* 递归：
```js
const helper = (root, lower, upper) => {
    if (root === null) {
        return true;
    }
    if (root.val <= lower || root.val >= upper) {
        return false;
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
};
```

* 中序遍历迭代
```js
var isValidBST = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};
```