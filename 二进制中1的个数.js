/***
《剑指offer》面试题10：二进制中1的个数
请实现一个函数，输入一个整数，输出该二进制中表示1的个数，例如把9表示成二进制是1001，有2为是1，因此如果输入是9，该函数输出为2
tip:eg:9&1:1;8&1:0;都是数字的最后一位与1相与。
***/
//最好的解法，比较的次数最少：比如1100; 会经过两次循环：第一次：n=1,1100-1=1011，1100&1011=1000；n=2,1000-1=0111,0111&1000=0000；停止循环。输出2
function numberOf1(num){
	var n=0;
	while(num){
		n++;
		num=(num-1)&num;
	}
	return n;
}
console.log(numberOf1(0x7FFFFFFF));//31
console.log(numberOf1(1));//1
console.log(numberOf1(0xFFFFFFFF));//32
console.log(numberOf1(0x80000000));//1
console.log(numberOf1(0));//0
//解法2：性能不好，num化成二进制有多少位，m就要向左移动多少位，
// function numberOf2(num){
// 	var n=0;
// 	var m=1;
// 	while(num>=m){//只要num大于m说明m还没有移到num能接受的最高位
// 		if(num&m){
// 			n++;
// 		}
// 		m=m<<1;
// 	}
// 	return n;
// }