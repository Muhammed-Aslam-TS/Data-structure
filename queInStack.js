

// class Node {
//     constructor(data = null, next = null) {
//         this.data = data
//         this.next = next
//     }
// }

// class Stack {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     push(elm) {
//         const newNode = new Node(elm)
//         if (!this.head) {
//             this.head = newNode
//             this.tail = newNode
//         } else {
//             newNode.next = this.head
//             this.head = newNode
//         }
//         this.size++
//     }
//     pop() {
//         let removed = null
//         if (!this.size) {
//             return null
//         }
//         if (this.head === this.tail) {
//             this.head = null
//             this.tail = null
//         } else {
//             removed = this.head
//             this.head = this.head.next
//         }
//         this.size--
//         return removed
//     }
// }

// class queue {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     Nq(data) {
//         const Newnode = new Node(data)
//         if (!this.head) {
//             this.head = Newnode
//             this.tail = Newnode
//         } else {
//             this.head.next = Newnode
//             this.tail = this.tail.next
//         }
//         this.size++
//     }
// }

// const list = new Stack()
// const list2 = new queue()

// list.push(10)
// list.push(15)
// list.push(40)
// list.push(20)
// list.push(5)

// console.log('-----------------');
// console.log(list.head);


// list2.Nq(list.pop())
// list2.Nq(list.pop())
// list2.Nq(list.pop())

// console.log(list);
// console.log(list2);


class Node {
    constructor(data = null, next = null) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    push(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    pop() {
        let removed = null
        if (!this.size) {
            return null
        }
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            removed = this.head
            this.head = this.head.next
        }
        this.size--
        return removed
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    Nq(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.next = newNode
            this.tail = this.tail.next
        }
        this.size++
    }
}

const list = new Stack()
const list1 = new Queue()


list.push(10)
list.push(10)
list.push(15)
list.push(20)
list.push(25)
list.push(30)
list.push(35)




list1.Nq(list.pop())
list1.Nq(list.pop())
list1.Nq(list.pop())

console.log(list);

console.log(list1);