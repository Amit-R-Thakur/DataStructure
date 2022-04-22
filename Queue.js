class Queue{
    constructor(){
        this.head=0;
        this.tail=0;
        this.store={}
    }
    Enqueue(value){
        if(this.head==0){
            this.head++
        }
        this.tail++
        this.store[this.tail]=value
        return `${value} added`
    }
    Dequeue(){
        if(this.head==0)
        return `Queue is Empty!`
        if(this.head==this.tail)
        this.head--
        const deleted=this.store[this.tail]
        delete this.store[this.tail]
        this.tail--
        return `${deleted} is deleted!`
    }
    IsEmpty(){
        return this.head==0?true:false
    }
    Length(){
        return this.tail
    }
    Peek(){
        if(this.head==0)
        return 'stack is empty'
        return this.store[this.tail]
    }
}

const queue=new Queue
console.log(queue.Enqueue(5))
console.log(queue.Enqueue(45))
console.log(queue.Dequeue())
console.log(queue.Dequeue())
console.log(queue.Dequeue())
console.log(queue.Enqueue(90))
console.log(queue.IsEmpty())
console.log(queue.Peek())
console.log(queue.Length())
console.log(queue)