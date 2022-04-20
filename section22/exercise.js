class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
          } else {
            current = current.right;
            return this;
          }
        }
      }
    }
  }
}

var bst = new BinarySearchTree();
bst.insert(50);
bst.insert(15);
bst.insert(16);
bst.insert(2);
console.log(bst.insert(3));
