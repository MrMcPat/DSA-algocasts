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
        if (!this.head) {
            return null
        }

        if (!this.head.next) {
            this.head = null
            return null
        }
         
        let previous = this.head
        let node = this.head.next
 
        while (node.next) {
             previous = node
             node= node.next
        }

        previous.next = null
    }

    insertLast(data) {
        // if (!this.head) {
        //     this.head = new Node(data, this.head)
        // }

        // let node = this.head

        // while (node.next) {
        //     node = node.next
        // }

        // node.next = new Node(data)
        
        const last = this.getLast()

        if (last) {
            last.next = new Node(data)
        } else {
            this.head = new Node(data)
        }
    }

    getAt(num) {
        if (!this.head) {
            return null
        }

        let node = this.head
        let nodeAmount = this.size()

        if (num > nodeAmount) {
            return null
        } else {
            for (let i = 0; i < num; i++) {
                node = node.next
            }
        return node
        }
    }

    removeAt(num) {
        if (!this.head) {
            return
        }

        if (num === 0) {
             this.head = this.head.next
             return  
        } 
   
        const previous = this.getAt(num - 1)

        if(!previous || !previous.next) {
            return null
        } else {
            previous.next = previous.next.next
        }

    }
}
	
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.removeAt(1);
console.log(list.getAt(1)); // returns node with data 'a'

module.exports = { Node, LinkedList };
