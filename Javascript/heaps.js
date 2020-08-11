'use strict'
/**
 * Implementtation of a minHeap
 * 
 * Reference Video = https://www.youtube.com/watch?v=t0Cq6tVNRBA
 * Reference article = https://medium.com/basecs/learning-to-love-heaps-cef2b273a238
 */

class MyHeap {

    heap = [];
    size = this.heap.length

    getLeftChildIndex(parentIdx) {
        return (2 * parentIdx) + 1
    }

    getRightChildIndex(parentIdx) {
        return (2 * parentIdx) + 2
    }

    getParentIndex(childIdx) {
        return Math.floor((childIdx - 1) / 2)
    }

    hasLeftChild(parentIdx) {
        return this.getLeftChildIndex(parentIdx) < this.heap.length
    }

    hasRightChild(parentIdx) {
        return this.getRightChildIndex(parentIdx) < this.heap.length
    }

    hasParent(childIdx) {
        return this.getParentIndex(childIdx) >= 0
    }

    leftChild(idx) {
        return this.heap[this.getLeftChildIndex(idx)]
    }

    rightChild(idx) {
        return this.heap[this.getRightChildIndex(idx)]
    }

    parent(idx) {
        return this.heap[this.getParentIndex(idx)]
    }

    swap(idx1, idx2) {
        const tmp = this.heap[idx1]
        this.heap[idx1] = this.heap[idx2]
        this.heap[idx2] = tmp

    }

    peek() {
        if (this.heap.length == 0) {
            console.log('heap is empty')
            return null
        } else {
            return this.heap[0]
        }
    }

    /**
     * Remove items from the Heap
     */
    remove() {
        if (this.size == 0) {
            console.log('heap is empty')
            return null
        } else {
            const removedItem = this.heap[0]
            this.heap[0] = this.heap[this.size - 1] //replace first item with last
            this.heap.length -= 1;  //shrink the array
            this.heapifyDown()
            console.log(`${removedItem} removed`);
            //return removedItem <==== UNCOMMENT TO RETURN REMOVED ITEM
        }
        console.log(`New Heap = ${this.heap}`)
    }

    /**
     * Add items to the Heap
     * 
     * @param {int} newItem 
     */
    add(newItem) {
        this.heap[this.size] = newItem
        this.size += 1
        this.heapifyUp()
        console.log(`New Heap = ${this.heap}`)
    }

    heapifyUp() {
        let currentIndex = this.size - 1 //lastElement's index
        while (this.hasParent(currentIndex) && this.parent(currentIndex) > this.heap[currentIndex]) {
            this.swap(this.getParentIndex(currentIndex), currentIndex);
            currentIndex = this.getParentIndex(currentIndex)
        }
        // console.log(`New Heap = ${this.heap}`)
    }

    heapifyDown() {
        let currentIndex = 0

        /* Check iif it has children, we only need to check leftChild, becaue if
         * there's no LEFTCHILD, there'll be no right CHild
         */
        while (this.hasLeftChild(currentIndex)) {
            let smallerChildIndex = this.getLeftChildIndex(currentIndex) //consider left idx to be smaller one
            if (this.hasRightChild(currentIndex) && this.rightChild(currentIndex) < this.leftChild(currentIndex)) {
                smallerChildIndex = this.getRightChildIndex(currentIndex)
            }

            if (this.heap[currentIndex] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(currentIndex, smallerChildIndex)
            }
            currentIndex = smallerChildIndex
        }
        // console.log(`New Heap = ${this.heap}`)
    }


}

module.exports = MyHeap;


/**
 * USAGE (NODE TERMINAL)
 *
 * const MyHeap = require(`./heaps`);
 * const h = new MyHeap()
 * h.add(66) <-------add items
 *
 */