class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

var g = new Graph();
console.log(g.addVertex("Tokyo"));
console.log(g.addVertex("San Francisco"));
console.log(g);
