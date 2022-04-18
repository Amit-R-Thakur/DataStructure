class Node{
    constructor(data){
        this.prev=null,
        this.data=data,
        this.next=null
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null,
        this.tail=null,
        this.length=0
    }
    addStart(data){
        let newNode=new Node(data)
        if(this.head==null){
            this.head=newNode
            this.tail=newNode
            this.length++
            return `${data} added at beginning!`
        }
        newNode.next=this.head
        this.head.prev=newNode
        this.head=newNode
        this.length++
        return `${data} added at beginning!`
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

const List=new DoublyLinkedList();//initializing doubly linked list
console.log(List.addStart(10))
console.log(List.addStart(30))
console.log(List.addStart(60))
console.log(List.addStart(80))
console.log(List.print())