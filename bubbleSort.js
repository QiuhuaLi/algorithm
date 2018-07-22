/***
优化后的冒泡算法：
第一步优化：添加isOrder参数，记录一轮比较中，是否有数值的交换，若没有，此数组是有序数组，后续的比较可以省略，减少了比较的次数，适当的优化的冒泡算法
第二步优化：添加了lastExchangeIndex参数，记录一轮循环比较中，最后一个交换的数值的下标。此下标后面的数值是有序排列的，不需要再次比较。因为冒泡算法是从前往后比较的，将大的数一级一级的往后面冒泡。
***/
function bubbleSort(arr){
	var lastExchangeIndex=0;//记录最后一次交换的位置
	var isOrder=true;//判断一轮比较下来是否有换位置，如果没有，则代表此数组已经规律，不需要后续的比较。
	var sortBorder=arr.length-1;//无序数列的边界，每次只需要比较到这里即可。
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<sortBorder;j++){
			if(arr[j]>arr[j+1]){
				var tmp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=tmp;
				isOrder=false;//有交换位置，则数组不是顺序排列。
				lastExchangeIndex=j;//把无序数列的边界更新到最后一次交换的位置。将比较的次数减少了。
			}
		}
		if(isOrder){
			break;
		}
		sortBorder=lastExchangeIndex;
		isOrder=true;//新的一轮循环的开始，假设已经顺序排列。
		console.log(arr);
	}
	return arr; 
}
bubbleSort([3,4,2,1,5,6,7,8])
// console.log(bubbleSort([3,4,2,1,5,6,7,8]));