"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    const prevTail = this.tail;
    let currentNode = this.head;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Need to ignore all duplicated values
      if (newNode.val === this.tail.val) return null;
      prevTail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);
    const oldHead = this.head;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.head = newNode;
    newNode.next = oldHead;

    return this;
  }

  insert(value, afterValue) {
    const newNode = new Node(value);
    if (!this.head) return null;
    const foundNode = this.findOne(afterValue);

    if (foundNode) {
      newNode.next = foundNode.next;
      foundNode.next = newNode;
    }

    return this;
  }

  shift() {
    const newHead = this.head.next;
    const oldHead = this.head;

    if (!this.head) return null;

    this.head = newHead;
    oldHead.next = null;

    return oldHead;
  }

  pop() {
    if (!this.head) return null;

    // Get the previous node of the tail
    let currentNode = this.head;
    let poppedNode = this.tail;

    // Loop through the elements
    while (currentNode) {
      if (currentNode.next === this.tail) {
        currentNode.next = null;
        this.tail = currentNode;
      } else {
        // Set the current element to the next before we are at the tail node
        currentNode = currentNode.next;
      }
    }

    this.length--;
    return poppedNode;
  }

  delete(value) {
    if (!this.head) return null;
    let currentNode = this.head;
    let deletedNode;

    if (value === this.head.val) return this.shift();
    if (value === this.tail.val) return this.pop();

    while (currentNode.next) {
      if (currentNode.next.val === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.length--;
    return deletedNode;
  }

  findOne(value) {
    if (!this.head) return null;
    let currentNode = this.head;

    if (value === this.head.val) return this.head;
    if (value === this.tail.val) return this.tail;

    while (currentNode.next) {
      if (currentNode.next.val === value) {
        return currentNode.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    return null;
  }

  findAll() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

const sll = new SingleLinkedList();
sll.push(5);
sll.push(10);
sll.push(20);
sll.push(8);
sll.push(21);
sll.push(35);
sll.push(2);
sll.push(8);
sll.push(3);

// console.log(sll.delete(10));
console.log(sll.insert(6, 21));
// console.log(sll.findOne(3));
// console.log(sll.findAll());

const nodeContainer = document.querySelector(".node-container");
const nodeValue = document.querySelector(".node-value");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  nodeContainer.innerHTML = "";
  addNode(Number(nodeValue.value));
  getNodes();
});

function addNode(value) {
  sll.push(value);
}

function getNodes() {
  for (const node of sll.findAll()) {
    const div = document.createElement("div");
    div.classList.add("nodes");
    div.classList.add(`node-${node.val}`);
    if (sll.findAll()[0].val === node.val) {
      div.innerText = `${node.val} \n Head \n Next: ${node.next.val}`;
    } else if (sll.findAll()[sll.findAll().length - 1].val === node.val) {
      div.innerText = `${node.val} \n Tail \n Next: ${null}`;
    } else {
      div.innerText = `${node.val} \n Next: ${node.next.val}`;
    }

    nodeContainer.append(div);
  }
}

getNodes();
