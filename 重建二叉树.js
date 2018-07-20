/*
* @Author: Li Qiuhua
* @Date:   2018-07-10 23:10:42
* @Last Modified by:   Li Qiuhua
* @Last Modified time: 2018-07-11 00:05:44
*/

'use strict';
function reConstructBinaryTree(pre, vin)
{
    if(pre[0]){
        var treeNode = {
            val: pre[0]
        }
    for(var i = 0; i < pre.length; i++) {
        if (vin[i] === pre[0]) {
        	//递归调用函数，通过找到前项遍历和中序遍历的数组来找到相应的节点的值。
            treeNode.left = reConstructBinaryTree(pre.slice(1, i+1), vin.slice(0, i));
            treeNode.right = reConstructBinaryTree(pre.slice(i+1),vin.slice(i+1));
        }
    }
    }
    return treeNode;
    console.log(treeNode)
}
reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]);
