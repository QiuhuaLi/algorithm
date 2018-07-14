//两个队列实现栈:验证了向空栈内压入数据，再弹出数据，向非空栈内压入数据，再弹出数据，看是否符合栈的后入先出的规则
function stack(){
	var queue1=[];
	var queue2=[];
	var r;
	this.addElem=function(elem){
		if(queue1.length){
			queue1.push(elem);
			console.log(queue1);
		}else{
			queue2.push(elem);
			console.log(queue2);
		}
	}
	this.deleteElem=function(){
		if(queue1.length){
			queue2=queue1.splice(0,queue1.length-1);
			r=queue1.pop();
			console.log(r);
			return r;
		}else{
			queue1=queue2.splice(0,queue2.length-1);
			r=queue2.pop();
			console.log(r);
			return r;
		}
	}
}
var stack1=new stack();
stack1.addElem(1);
stack1.addElem(2);
stack1.addElem(3);
stack1.deleteElem();
stack1.deleteElem();
stack1.addElem(4);
stack1.addElem(5);
stack1.deleteElem();

