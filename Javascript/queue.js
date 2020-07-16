// Implement a Queue class from scratch with an existing bug, 
// the bug is that it cannot take more than 5 elements.


class Queue {

      constructor() {
          this.queue = [];
      }

      addElements(element) {
            if (this.stackCount() >= 5) {
                  throw "Whoops! queue full";
            } else {
                  this.queue.unshift(element)
            }
            
      }

      removeElement() {
            this.queue.pop()
      }

      stackCount() {
            return this.queue.length
      }
      printQueue() {
            console.log(this.queue);
      }

}

const testQueue = new Queue();
testQueue.addElements(2);
testQueue.addElements(22);
testQueue.addElements(222);
testQueue.addElements(2222);
testQueue.addElements(3);
testQueue.printQueue();
testQueue.addElements(99);
