/***
《剑指offer》面试题11：数值的整数次方
实现函数Math.pow(),求base的exponent次方，不得使用库函数，同时不需要考虑大数问题
***/
//考虑到边界条件，特别是底数为0，指数为负数的错误处理。通过记录变量invalidInput的值来表示当前输出0是正确输入出现的情况还是错误输入的情况；
//考虑指数是分别为正数和负数的情况；
function pow(base,exponent){
	var invalidInput=false;
	if(base===0&&exponent<0){
		invalidInput=true;
		console.log(invalidInput);
		return 0;
	}else if(base===0&&exponent>0){
		console.log(invalidInput);
		return 0;
	}else if(exponent<0){//若指数为负数
		var absExponent=-exponent;//定义absExponent为指数的绝对值
		return 1/doPow(base,absExponent);
	}else{
		return doPow(base,exponent);
	}

}
//计算指数运算。假如指数是32，则我们计算16次方与16次方相乘，16又可以拆成8,8可以拆成4,4可以拆成2，一级一级递归上去，减少了循环的次数。
function doPow(base,exponent){
	var result=1;
	if(exponent===0){
		return 1
	}else if(exponent===1){//判断指数是否为1，这一步很重要对于下面的递归来讲，因为2>>1=1，所以要知道当exponent=1时result的值
		return base;
	}else if(exponent>1){
		result=doPow(base,exponent>>1);//记录每一次递归返回的值。右移一位相当于做除2处理。
		// console.log(exponent>>1);
	}
	result*=result;//eg:2^4*2^4
	if(exponent&1){//判断指数是奇数还是偶数，若为奇数则还需要乘本身。只会判断一次，在顶层函数执行时。
		result*=base;
	}
	return result;
}
console.log(pow(0,-1));//true 0
console.log(pow(0,2));//false 0
console.log(pow(2,-10));//0.0009765625
console.log(pow(2,-11));//0.00048828125
console.log(pow(2,10));//1024
console.log(pow(2,11));//2048
console.log(pow(2,4));//16

