//快速排序：先在数组中选择一个数字，将数组中的其他数字与这个数字作比较。若比这个数字大就放到这个数字的右边，比它小放到这个数字的左边，再对左右这两个数组进行递归
function quicksort(arr){
	console.log(arr.length);
	if(arr.length>1){
		var n=[arr[0]],left=[],right=[];
		for(var i=1;i<arr.length;i++){
			if(arr[i]>=n){
				right.push(arr[i]);
			}else if(arr[i]<n){
				left.push(arr[i]);
			}
		}
	}else{
		// console.log(arr);
		return arr;
	}
	//连接数组使用concat！
	return quicksort(left).concat(n.concat(quicksort(right)));//这里我最开始想的是使用push的方法向数组中添加元素，但是出现了错误：push返回的是新数组的长度。如下测试
}
console.log(quicksort([1,4,2,8,5,10,90,20,45,22,70,4]));
function testPush(elem){
	var arr=[];
	// arr.push(elem);
	// return arr;//返回的是修改后的数组。
	return arr.push(elem);
}
// console.log(testPush([1,2]));//测试是否可以push一个数组，答案是可以的，这个数组在一个位置上。
console.log(testPush(3));//输出1，表示数组的长度，而不是内容。