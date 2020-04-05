// 队列： 先入先出
class Queue{
    constructor(ele){
        this.queue = ele ? [ele] : []
    }
    add(ele){
        this.queue.push(ele)
        console.log(this.queue)
    }
    remove(){
        if(this.queue.length){
            console.log(this.queue.shift())
            console.log(this.queue)
        }else{
            console.log('this queue is empty')
        }
    }
}