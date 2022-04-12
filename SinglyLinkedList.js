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
    }
    addLast(data){
        let newNode=new Node(data)
        if(!this.head){
             this.head=newNode
             this.tell=newNode
             return
        }
        this.tell.next=newNode
        this.tell=newNode
    }
    addStart(data){
        let newNode=new Node(data)
        if(!this.head){
            this.head=newNode;
            this.tell=newNode
            return
        }
        newNode.next=this.head
        this.head=newNode
    }
    deleteValue(val){
        if(!this.head)
        return "List is Empty!"
        let currentNode=this.head
        while(currentNode.next){
            if(currentNode.next.data==val)
            {
                currentNode.next=currentNode.next.next
            }
            else
            {
                currentNode=currentNode.next
            }
        }
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
L1.addLast(5)
L1.addLast(10)
L1.addLast(5)
L1.addLast(10)
L1.addStart(15)
L1.addStart(45)
L1.addLast(55)
L1.deleteValue(5)
L1.deleteValue(10)
console.log(L1.print())
// console.log(L1)