class Node {
    constructor(data = null, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    prippend(value) {
        const newValue = new Node(value)
        if (this.head == null) {
            this.head = newValue
        } else {
            newValue.next = this.head
            this.head = newValue
        }
        this.size++
    }

    append(value) {
        const newelmt = new Node(value)
        if (this.head == null) {
            this.head = newelmt
        } else {
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = newelmt
        }
        this.size++
    }

    milddeElemAdd(value) {
        const node = new Node(value);
        if (this.head == null) {
            this.head = node
        } else {
            let current = this.head;
            const middle = (this.size / 2);
            for (let i = 0; i < middle - 1; i++) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++;
        }
    }

    addToArray(arr){
        for (let i = 0; i < arr.length-1; i++) {
            let current = this.head
                 const newNode = new Node(arr[i])
                 if (this.head == null ) {
                    this.head = newNode
                 }else{
                    while (current.next!=null) {
                        current = current.next
                    }
                    current.next = newNode
                 }
        }
    }

    Arrpass(arr) {
        for (let i = 0; i <= arr.length - 1; i++) {
            this.append(arr[i])
        }
    }


    

    printlist() {
        // let currentNode = this.head;
        // let data = " " ;
        // while (currentNode) {
        //     data += currentNode.data + " "
        //     currentNode = currentNode.next
        // }
        // console.log(data)

        let currentNode =this.head
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next
        }
    }
}

let list = new LinkedList()

list.prippend(4)
list.prippend(5)
list.prippend(8)
list.prippend(1)
list.append(9)
list.addToArray([11,33,44,66,77])

list.milddeElemAdd(6)
list.milddeElemAdd(7)

// array.map((e)=>{
//     list.prippend(e)
// })

console.log(list.head.data, "__________________________head");

list.printlist()