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
    }
}

const list = new LinkedList()
list.insertFirst('a')
list.insertFirst('b')
list.insertFirst('c')
list.size(); // returns 3


module.exports = { Node, LinkedList };
