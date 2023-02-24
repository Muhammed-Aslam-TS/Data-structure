

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
    arrayConverter(array) {
        //let array = [1,4,6,8,4,7,4,7,9,3]
        for (let i = 0; i <= array.length - 1; i++) {
            let n = new Node(array[i]);
            let current = this.head;
            if(this.head === null){
                this.head = n;
            }
            else{
                while(current.next!=null){
                    current = current.next;
                }
                current.next = n;
            }
    }
    }
    printList(){
        let current = this.head;
        let data = '';
        while(current !== null){
            data += current.data + " ";
           current = current.next   
        }
        console.log(data);
    }
}

const list = new linkedList()

list.arrayConverter([1,2,3,4,5,6,7,8,9])
list.printList();
