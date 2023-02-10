class Node {
    constructor(data = null , next = null){
        this.data = data
        this.next = next
    }
}class linkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    prippend(value){
        const newNode1 = new Node(value)
        newNode1.next = this.head
        this.head = newNode1
        this.size ++
    }
    

    printList(){
        let currentNode = this.head
        while(currentNode != null){
            console.log(currentNode.data);
            currentNode =  currentNode.next   
        }
    }
}

const list = new linkedList()
list.prippend(10)
list.prippend(20)
list.prippend(30)
list.prippend(40)
console.log(list.head);
list.printList()
