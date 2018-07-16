/******
斐波那契数列：f(n)=0(n=0)、1（n=1）、f(n-1)+f(n-2) (n>1).
写一个函数，输入n，求斐波那契数列的第n项。
*******/
function fibonacci(n){
	if(n==0){
		return 0;
	}else if(n==1){
		return 1;
	}
	var arr=[];
	arr[0]=0;
	arr[1]=1;
	for(var i=2;i<=n;i++){
		arr[i]=arr[i-1]+arr[i-2];
	}
	return arr[n];
}
console.log(fibonacci(9));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(4));