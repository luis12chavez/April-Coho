/****************************************************************************************************************************************************/
// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode

        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        return this.head
    }



/****************************************************************************************************************************************************/
    // Remove Front
    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    removeFront() {
        if (this.head == null) {
            return null
        }
        else {
            let frontHead = this.head.data
            this.head = this.head.next
            console.log('Front Head: ', frontHead) 
            
        }
        return this.head
    }


// const newNode = new LinkedList()


// console.log(newNode.removeFront())
// newNode.addFront(18)
// newNode.addFront(20)
// newNode.addFront(54)
// console.log(newNode.removeFront())
// // newNode.removeFront()
// console.log('')
// console.log(newNode)


/****************************************************************************************************************************************************/
// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

frontNodeValue() {
    if(this.head === null) {
        return null
    }
    else {
        let headValue = this.head.data
        console.log(headValue)
    }

}

}

const newNode = new LinkedList()
newNode.addFront(18)
newNode.addFront(20)
newNode.addFront(54)
newNode.frontNodeValue()
newNode.removeFront()
newNode.removeFront()
newNode.removeFront()
console.log(newNode.frontNodeValue())
