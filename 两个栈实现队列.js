//两个栈实现队列：栈：是一种先进后出的数据结构，队列是一种先进先出的数据结构
//两个栈实现队列：让stack1接收输入队列的数据，让stack2接收stack1输出的数据，让数据的顺序改变了一下。就变成先进先出了。输出数据时，让stack2里面的数据输出，
//若stack2当中没有数据了，则先将stack1的数据输入到Stack2中，改变输出数据的顺序，然后在输出。
function queue(){
	var stack1=[];
	var stack2=[];
	this.addElement=function(elem){
		stack1.push(elem);
		console.log(stack1.toString());
	}
	this.deleteEle=function(){
		if(stack2.length){//若stack2中有元素，就弹出此元素
			element=stack2.pop();
		}else{
			if(stack1.length){
				for(var i=0;i<stack1.length;i++){
					stack2.push(stack1.pop());
				}
			}else{
				alert('this queue is empty');
			}
		}
		// return element;
		console.log(stack2.pop());
	}
}
var queue1=new queue();
queue1.addElement(1);
queue1.addElement(2);
queue1.deleteEle();
queue1.deleteEle();
// queue1.deleteEle();
queue1.addElement(3);

