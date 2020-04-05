// 栈 先入后出（FILO）
class Stack{
    constructor(element){
        this.stack = element ? [element] :[]
    }
    add = (ele) => {
        this.stack.push(ele)
        console.log(this.stack)
    }
    remove = () => {
        if(this.stack.length){
          console.log(this.stack.pop())
          console.log(this.stack)
        }else{
          console.log('this stack is empty')
        }
    }
}