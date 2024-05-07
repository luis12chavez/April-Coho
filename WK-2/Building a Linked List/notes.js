/*********************************************************************************************************************************/
class Node {
    constructor(data) {
        // data and the Pointer to the next node will be setup as attributes
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

/*********************************************************************************************************************************/
// Building Linked List Methods
addFront(val) {
    // Creating a new node object with the value provided
    let new_node = new Node(val);
    // Checking to see if the current list does not have a head node (if the list is empty)
    // If the list is empty, place the new node as the head 
    if (!this.head) {
        this.head = new_node;
        return this;
    }
    // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
    new_node.next = this.head;
    // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
    this.head = new_node;
    return this;
}
}

// let newNode = new Node([1,2,3,4,5])
// console.log(newNode)
// let newLinkedList =  new LinkedList()
// // console.log(newLinkedList.addFront(newNode))
// newLinkedList.addFront(newNode)
// console.log(newLinkedList)

