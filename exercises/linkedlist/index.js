// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let counter = 0
        let node = this.head

        while (node) {
            counter++
            node = node.next
        }

        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if (!this.head) {
            return null
        }
        
        let node = this.head
        
        while (node.next) {
            node = node.next
        }

        return node
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (!this.head) {
            return null
        }
        
        this.head= this.head.next
    }

    removeLast() {
        
    }
}
	
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.removeFirst();
console.log(list.getFirst()); // returns node with data 'a'

module.exports = { Node, LinkedList };
