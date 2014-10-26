'use strict';

var Queue = require('./queue');
/*
Graphs
======

two parts: vertices (like towns) and edges (like roads)

Vocab:
	* "directed" graph when the vertices are ordered
		* can represent with arrows
	* "path" = sequence of connected vertices
	* "self-loop" = path from vertex to itself
	* "cycle" = "a path whose first and last vertices are the same"
	* "degree" of a vertex = number of adjacent vertices

~~~
Vertex class will hold two data:
	* label: identifies the vertex
	* wasVisited: a boolean that does the obvious
e.g.:
*/
 function Vertex(label) {
	this.label = label; // I guess we add visited on the fly?
}
/*
We store vertices in an array, and reference in the Graph class by their position in the array.

~~~
Edges are the important stuff: describe structure

We represent edges with an "adjacency list" (or array of adjacency lists)

We store the edges as a vertex-indexed (parent) array of (child) arrays of the other vertices that are adjacent to a given vertex.
	* That is, edges are represented by nothing but vertices!
	* e.g., if vertex 2 is connected to vertices 0, 1, 3, we store it in array[2] and, when we access the element, get an arraay that consists of 0, 1, and 3

So what might a graph class look like?
*/
var Graph = function(v) { // v is just a number
	this.vertices = v;
	this.edges = 0;
	this.adj = []; // The parent array
	this.marked = []; // Visited truth
	this.edgeTo = [];
	for (var i = 0; i < this.vertices; i++) {
		this.marked[i] = false;
		this.adj[i] = []; // Each child array
	}
};

/**
 * Adding edges is easy: for a pair, just push each into the other's adjacency list and (if there's one available) increment the global edge count
 */

Graph.prototype.addEdge = function(a, b) {
	this.adj[a].push(b); // Add b to a's adjacency list
	this.adj[b].push(a); // And vice versa
	this.edges++; // Increment global edge count
};

/**
 * How to show the contents of a graph? With a double for-loop: both loops iterate over *every* vertex (this.vertices).
 Inside? Simple: if this.adj[i][j] !== 'undefined', log it out
 */
Graph.prototype.showGraph = function() {
	for (var i = 0; i < this.vertices; i++) {
		console.log('\n' + i + ':');
		for (var j = 0; j < this.vertices; j++) {
			if (this.adj[i][j] !== undefined) {
				console.log(this.adj[i][j]);
			}
		}
	}
};


/*
Depth-first search means following a given path from the beginning vertex to the last vertex, then backtracking; following another path from the beginning vertext to the last vertex, backtracking; following another path...

Not a search for a given item; a search for how many paths we can follow.

How to do it?

Visit a vertex that's not previously visited, mark it as visited, and then recursively visit (all the) other unvisited vertices in that vertex's adjacency list.

*/

Graph.prototype.dfs = function(v) {
	this.marked[v] = true; // Mark each visited as you hit it
	if (this.adj[v] !== undefined) { // If a visited vertex isn't undefined, log it out
		console.log('visited vertex: ' + v);
	}
	this.adj[v].forEach(function(w) { // Do a for-loop over the array located at the current vertex: for each, invoke DFS (if it's not marked).
	// That is, a very standard recursive function
	 	if (!this.marked[w]) {
	 		this.dfs(w);
	 	}
	}, this);
};

/**
 * In contract, BFS moves down "layer by layer"

 Core difference: behind the scenes, DFS relies on an implicit stack that governs the recursive calls, which means it's LIFO.

 BFS, on the other hand, is FIFO: it processes vertices in they order they're found. That means the data structure we want is a queue.

 BFS works like this:

 	* Find an unvisited vertex next to the current vertex, add it to the queue, and mark it as visited
 	* Take the next (adjacent) vertex and push it into the queue

The whole thing runs in a while-loop: no recursive calls, but the queue keeps growing even as its dequeued.
 */

Graph.prototype.bfs = function(s) {
	var queue = new Queue();
	this.marked[s] = true;
	queue.enqueue(s);
	while(queue.getLength() > 0) {
		var v = queue.dequeue();
		if (v !== 'undefined') {
			console.log('Visited vertex: ' + v);
		}
		console.log('Adjacencies: ' + this.adj[v]);
		if (this.adj[v]) {
			this.adj[v].forEach(function(w) {
				if (!this.marked[w]) {
					this.edgeTo[w] = v;
					this.marked[w] = true;
					queue.enqueue(w);
				}
			}, this);
		}
	}
};

Graph.prototype.pathTo = function(v) {
	var hasPathTo = function(v) {
		return this.marked[v];
	};

	var source = 0,
		path = [],
		i;
	if (hasPathTo(v)) {
		return undefined;
	}
	for (i = v; i != source; i = this.edgeTo[i]) {
		path.push[i];
	}
	path.push(s); // s: what??
	return path;
};

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
console.log('**** DFS*****');
// g.dfs(0);
console.log('*****BFS*****');
// g.bfs(2);
var paths = g.pathTo(4);
console.log(paths);