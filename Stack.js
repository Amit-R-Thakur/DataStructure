class Stack{
    constructor(){
        this.store={}
        this.size=0
    }
    // push
    push(val){
        this.size++
        this.store[this.size]=val
        return `${val} added at index ${this.size}`
    }
    // pop
    pop(val){
        if(this.size==0)
        return `stack is empty`
        let daleted=this.store[this.size]
        delete this.store[this.size]
        this.size--
        return `${daleted} is deleted`
    }
    // peek
    peek(){
        if(this.size==0)
        return ` stack is Empty`
        return this.store[this.size]
    }
    // isEmpty
    isEmpty(){
        return this.size>0?false:true
    }
    clear(){
        this.store={}
        this.size=0
        return `stack is clear`
    }
}

const stack=new Stack
console.log(stack.push(3))
console.log(stack.push(5))
console.log(stack.clear())
console.log(stack.isEmpty())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack)
