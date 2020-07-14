/*
    ======== BRAINSTORMING SESSION ===============
    
    Given a reference of a node in a connected undirected graph.

    Return a deep copy (clone) of the graph.

    Each node in the graph contains a val (int) 
    and a list (List[Node]) of its neighbors.

    class Node {
        public int val;
        public List<Node> neighbors;
    }
     

    Test case format:

    For simplicity sake, each node's value is the same as the node's
     index (1-indexed). For example, the first node with val = 1, 
     the second node with val = 2, and so on. The graph is represented 
     in the test case using an adjacency list.

    Adjacency list is a collection of unordered lists used to 
    represent a finite graph. Each list describes the set
     of neighbors of a node in the graph.

    The given node will always be the first node with val = 1. 
    You must return the copy of the given node as a reference to the cloned graph.

    EXERCISE ==> https://leetcode.com/problems/clone-graph/
*/

 
 /**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
   console.log(node)
    let visited = []
    let first = node
    const clone = {}
    
    const leftNeighbor = first.neighbors[0].val
    const rightNeighbor = first.neighbors[1].val
    
    while (visited.includes(leftNeighbor) == false && visited.includes(rightNeighbor)==false){
        visited.push(first)
        clone.val = first. val
        clone.neighbors = [leftNeighbor, rightNeighbor]
        cloneGraph(first.neighbors[0])
        cloneGraph(first.neighbors[1])
        
    }
    
    
     console.log(clone)
    
};