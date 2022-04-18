class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null
        this.tell=null
        this.length=0
    }
    addLast(data){
        let newNode=new Node(data)
        if(!this.head){
             this.head=newNode
             this.tell=newNode
             this.length++
             return
        }
        this.tell.next=newNode
        this.tell=newNode
        this.length++
    }
    addStart(data){
        let newNode=new Node(data)
        if(!this.head){
            this.head=newNode;
            this.tell=newNode
            this.length++
            return
        }
        newNode.next=this.head
        this.head=newNode
        this.length++
    }
    addAtIndex(data,index){
        if(!this.head)
        return "Node is empty"
        console.log(index)
        console.log(this.length)
        if(index>=this.length||index<0)
        return "Invalid index"
        let currentNode=this.head
        for(let i=0;i<index-1;i++){
            currentNode=currentNode.next
        }
        // console.log(currentNode)
        let newNode=new Node(data)
        newNode.next=currentNode.next
        currentNode.next=newNode
        // console.log(newNode)
        return `new node added at index ${index}!`
    }
    deleteValue(val){
        if(!this.head)
        return "List is Empty!"
        let currentNode=this.head
        while(currentNode.next){
            if(currentNode.next.data==val)
            {
                currentNode.next=currentNode.next.next
                this.length--
            }
            else
            {
                currentNode=currentNode.next
            }
        }
    }
    deleteByIndex(inx){
        if(inx==0){
        let deletedNode=this.head
        this.head=this.head.next
        this.length--
        return `deleted ${deletedNode.data}`
       }
       if(inx>=this.length)
       {
           return "invalid index"
       }
       let currentNode=this.head
       for(let i=0;i<inx-1;i++){
           currentNode=currentNode.next
       }
       let deletedNode=currentNode.next
       currentNode.next=currentNode.next.next
       this.length--
       return `deleted ${deletedNode.data}`
    }
    print(){
        let currentNode=this.head
        let arr=[]
        while(currentNode){
            arr.push(currentNode.data)
            currentNode=currentNode.next
        }
        return arr
    }
}

const L1=new SinglyLinkedList()
L1.addLast(9)
L1.addLast(10)
L1.addLast(5)
L1.addLast(10)
L1.addStart(15)
L1.addStart(45)
L1.addLast(55)
// L1.deleteValue(5)
L1.deleteValue(10)
console.log(L1.deleteByIndex(1))
console.log(L1.deleteByIndex(3))
console.log(L1.addAtIndex(35,2))
console.log(L1.print())
// console.log(L1)