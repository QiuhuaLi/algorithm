/******
旋转数组的最小数字：
题目：把一个数组最开始的若干元素搬到数组的末尾，我们称之为数组的旋转。
输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素，例如：数组[3,4,5,1,2]为[1,2,3,4,5]
的一个旋转，该数组的最小值为1.
*******/

//二分查找法，分析mid是位于前面数组部分还是后面数组部分。从而找到最小的数值
function min(arr){
	if(arr.length<=0){
		throw new error("请输入正确的数组");
	}
	var i=0,j=arr.length-1,mid=0;
	//数组是经过排序了的，所以数组最后一个值大于第一个值的时候，旋转的是前0个数字。直接输出数组第一位就行。
	while(arr[i]>=arr[j]){
		if((j-i)==1){//i与j之间的步长为1时，后面的j就是最小值的下标，i,j分别位于前一部分增序的最后，后一部分增序的最后
			mid=j;
			break;
		}
		mid=(i+j)/2;
		if(arr[i]==arr[mid]&&arr[mid]==arr[j]){
			return minInOrder(arr,i,j);//当i==j==mid时就要使用顺序排序找到最小值。例如第二个例子
		}else if(arr[mid]>=arr[i]){
			i=mid;
		}else if(arr[mid]<=arr[j]){
			j=mid;
		}
	}
	return arr[mid];
}
//当i,j,mid为下标的数组值都相等的时候，顺序遍历i到j之间的数。找到最小值
function minInOrder(arr,i,j){
	var len=j-i+1;
	for(var o=i+1;o<len;o++){
		if(arr[o]<arr[j]){
			return arr[o];
		}else if(arr[o]===arr[o+1]&&o==j-1){//解决输入的数组全相等的情况eg:[1,1,1,1,1,1]
			return arr[j];
		}
	}
}
console.log(min([3,4,5,1,2]));//1
console.log(min([1,0,1,1,1]));//0
console.log(min([4,5,6,7,3]));//3
console.log(min([2,3,4,5,6]));//2
