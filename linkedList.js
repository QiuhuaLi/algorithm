/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-04 14:22:40
 * @version $Id$
 */
function linkedList(){
	//linkedList实例的私有函数
	var head=null;
	//链表构造函数中的节点构造函数
	var Node=function(element){
		this.element=element;
		this.next=null;
	}
	this.length=0;
	//特权方法(向链表中添加节点)
	this.append=function(element){
		var node=new Node(element);
		var current=null;
		if(head===null){
			head=node;
		}else{
			current=head;
			while(current.next){
				current=current.next
			}
			current.next=node;
		}
		this.length++;
	}
	//删除链表中特定位置的节点
	this.removeAt=function(position){
		if(position>-1&&this.length!=0){//有效性检测
		var current=head;//用current循环列表
		var previous;//保存删除节点前的节点
		var index=0;
		if(position==0){
			head=current.next;//移除第一个节点，直接把head指向下一个节点
		}else{
			while(index++<position){//循环列表找到满足条件的节点
				previous=current;//与current指向同一个点
				current=current.next;//current向前进一步
			}
			previous.next=current.next;//本来previous.next=current,但现在current.next=previous.next。即把current节点删除，
		}
		this.length--;//链表长度——1
		return current.element;//返回被删除的节点
		}else{
			return null;//如果不通过有效性检测，不删除任何元素，返回null
		}

	}
	//在链表中的任意位置插入节点
	this.insert=function(position,element){
		if(position>-1&&position<=this.length){//有效性检测。等于长度也可以，相当于在结尾添加
			var current=head;
			var previous;
			var index=0;
			var insertElement=new Node(element);
			if(position==0){//第一个位置单独分析，此时只需要改变头结点的指向即可
				insertElement.next=current;//此时head==current
				head=insertElement;//insertElement指向head，insertElement就成了第一个
			}else{
				while(index++<position){
					previous=current;
					current=current.next;
				}
				previous.next=insertElement;//插入节点的上一个为previous
				insertElement.next=current;//插入节点的下一个为current
			}
			this.length++;
			return true;
		}else{
			return false;
		}
	}
	//将链表转换为字符串输出
	this.toString=function(){
		var current=head;
		var str="";
		while(current){
			str+=current.element;
			current=current.next;
		}
		return str;
	}
	//返回元素的位置
	this.indexOf=function(element){
		var str=this.toString();
		// console.log(str);
		var i=0;
		var indexs=[];
		// console.log(i<str.length);
		while(i<str.length){
			if(str.indexOf(element,i)==-1){
				return false;
			}else{
				indexs.push(str.indexOf(element,i));
				i=i+1;
			}
		}
		return indexs.join(" ");
	}
	//从尾到头打印链表(采用栈的方法)
	this.printList=function(){
		var current=head;
		var arr1=[];//过渡数组
		var str=' ';//返回的字符串
		while(current!=null){//当前节点存在。
			arr1.push(current.element);
			current=current.next;
		}
		while(arr1.length){
			str+=arr1.pop();
		}
		return str;
	}
	//从头打印链表（采用递归调用函数的方法:每访问到一个节点就递归输出它后面的节点再输出自身节点）
	this.printCycle=function(current=head){//es6默认参数的传递
		if(current!=null){
			if(current.next!=null){
				this.printCycle(current.next);
			}
			console.log(current.element);
		}
		
	}
}
var list=new linkedList()
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
console.log(list.toString());
console.log(list.indexOf(1));
console.log(list.indexOf(2));
list.printCycle()