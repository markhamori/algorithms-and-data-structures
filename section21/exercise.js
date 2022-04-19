class Node {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var prevNode = this.tail;
      this.tail = newNode;
      newNode.prev = prevNode;
      prevNode.next = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    var poppedNode = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    poppedNode.prev = null;
    poppedNode.next = null;

    return poppedNode;
  }
}

const dll = new DoublyLinkedList();
dll.push("Ron");
dll.push("Hermione");
dll.push("Harry");
console.log(dll.pop());
console.log("////////////////TAIL////////////////");
console.log(dll.head);
