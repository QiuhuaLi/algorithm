function queue(){
	var stack1=[];
	var stack2=[];
	var element;
	this.addElement=function(elem){
		stack1.push(elem);
		console.log(stack1.toString());
	}
	this.deleteEle=function(){
		element=undefined;//当列表为空时防止上次赋的值对这次产生影响
		if(stack2.length){//若stack2中有元素，就弹出此元素
			element=stack2.pop();
		}else{
			if(stack1.length){
				for(var i=0;i<stack1.length;i++){
					stack2.push(stack1.pop());
				}
				element=stack2.pop();
			}else{
				alert('this queue is empty');
			}
		}
		// return element;
		console.log(element);
	}
}
var queue1=new queue();
queue1.addElement(1);
queue1.addElement(2);
queue1.deleteEle();
queue1.deleteEle();
// queue1.deleteEle();
queue1.addElement(3);

