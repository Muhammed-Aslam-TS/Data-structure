class Node {
    constructor(data = null, next = null) {
        this.data = data
        this.next = next
    }
}


class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    append(value) {
        let newElemnt = new Node(value)
        if (this.head == null) {
            this.head = newElemnt
            this.size++
        } else {
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = newElemnt
            this.size++
        }


    }

    midd(values){
        const value = new Node(values)
        if (this.head==null) {
            this.head = value
        }else{
            let current = this.head
            let midd = (this.size/2)
            for (let i = 0; i < midd-1; i++) {
               current = current.next
            }
            value.next = current.next
            current.next = value
        }
        this.size++
    }

    printList() {

        let currentNode = this.head
        while (currentNode != null) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }

    }

}


const list = new linkedList()
list.append(15)
list.append(20)
list.append(25)

list.midd(10)
list.printList()

