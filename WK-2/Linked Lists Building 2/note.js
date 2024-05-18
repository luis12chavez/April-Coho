// Reference: 
// https://www.youtube.com/watch?v=cob_kM0PJMo

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    push(data) {
        let node = new Node(data)

        // Checking first if there is no Head to the LinkedList
        if(this.head === null ) {  
            this.head = node
        }
        else {
            let current = this.head
            while(current.next != null) {
                // console.log(current)
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    findbyValue(value) {
        let current = this.head
        while(current.next != null) {
            if(current.data === value) {
                return true
                // current = current.next
            }
            return false
        }
    }

    addTwoToDataValue() {
        // setting current to be main Head Node
        let current = this.head
        // Iterating through the list till the next attribute is null
        while(current.next != null) {
            current.data += 2
            current = current.next
        }
            current.data += 2
        
    }

    displayLastListData() {
        let current = this.head
        while(current.next != null) {
            current = current.next 

            if(current.next == null)
                {
                    console.log(`Last Node value --> ${current.data}`)
                    // console.log(current)
                }
        }
    }
}

const list = new LinkedList()

list.push(25)
list.push(54)
// list.push(6)
// list.push(55)
// list.displayLastListData()
// list.addTwoToDataValue()cd 
console.log(list)
// console.log(list.findbyValue(56))