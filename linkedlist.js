
//Linked List with simple append operatiob=n

class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }
    append(data) {
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode,
            this.tail = newNode,
            this.length++
    }

}

const myList = new LinkedList(21)
myList.append(45)
myList.append(25)

console.log(myList);