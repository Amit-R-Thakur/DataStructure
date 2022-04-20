class Node {
  constructor(data) {
    (this.prev = null), (this.data = data), (this.next = null);
  }
}
class DoublyLinkedList {
  constructor() {
    (this.head = null), (this.tail = null), (this.length = 0);
  }
  addStart(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return `${data} added at beginning!`;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return `${data} added at beginning!`;
  }
  addLast(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return `${data} added in last!`;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    newNode.prev = currentNode;
    currentNode.next = newNode;
    this.length++;
    return `${data} added in last!`;
  }
  addAtIndex(data, index) {
    if (index < 0 || index >= this.length) return "invalid index number!";
    let newNode = new Node(data);
    if (index == 0) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return `${data} added at Index ${index}!`;
    }
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    currentNode.next.prev = newNode;
    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    currentNode.next = newNode;
    this.length++;
    return `${data} added at Index ${index}!`;
  }
  deleteByValue(value) {
    let crntNode = this.head;
    let count = 0;
    while (crntNode.next) {
      if (this.head.data == value) {
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        count++;
      } else if (crntNode.data == value) {
        crntNode.prev.next = crntNode.next;
        this.length--;
        count++;
      }
      crntNode = crntNode.next;
    }
    if (count == 0) return `${value} not found in the list`;
    return `${value} deleted from list`;
  }

  print() {
    let currentNode = this.head;
    let arr = [];
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const List = new DoublyLinkedList(); //initializing doubly linked list
console.log(List.addStart(10));
console.log(List.addStart(30));
console.log(List.addStart(60));
console.log(List.addStart(80));
console.log(List.addStart(30));
console.log(List.print());
console.log(List.addLast(90));
console.log(List.addAtIndex(20, 2));
console.log(List.addAtIndex(40, 5));
console.log(List.deleteByValue(40));
console.log(List.deleteByValue(30));
console.log(List.deleteByValue(80));
console.log(List.print());
