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

  push(val) {
    const newNode = new Node(val);
    const prevTail = this.tail;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (newNode.val === this.tail.val) return null;
      prevTail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  get() {
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
sll.push(3);

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
  for (const node of sll.get()) {
    const div = document.createElement("div");
    div.classList.add("nodes");
    div.classList.add(`node-${node.val}`);
    if (sll.get()[0].val === node.val) {
      div.innerText = `${node.val} \n Head`;
    } else if (sll.get()[sll.get().length - 1].val === node.val) {
      div.innerText = `${node.val} \n Tail`;
    } else {
      div.innerText = node.val;
    }

    nodeContainer.append(div);
  }
}

getNodes();
