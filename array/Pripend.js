
class Node {
    constructor(data = null, next = null) {
        this.data = data
        this.next = next
    }
}

class linkedList {
    constructor() {
        this.data = null
        this.size = 0

    }

    prippend(value) {
       const newElm = new Node(value)
      if (this.head == null) {
            this.head = newElm
      }else{
        newElm.next = this.head
        this.head = newElm
      }
    }

    printList(){
        let currentNode = this.head
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next
        }
    }



}


const list = new linkedList()
list.prippend(10)
list.prippend(20)
list.prippend(30)
list.prippend(40)
list.prippend(50)

console.log(list);
list.printList()