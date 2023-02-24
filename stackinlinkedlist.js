// class Node {
//   constructor(data,next){
//     this.data = data
//     this.next = null

//   }
// }


// class Stack {
//   constructor(){
//     this.head = null
//   }

//   push(elm){
//     const node = new Node(elm)
//     node.next = this.head
//     this.head = node 
//   }

//   pop(){
//     let temp = this.head 
//     this.head = this.head.next
//     temp = null
//   }

//   printList(){
//     while(this.head){
//         console.log(this.head.data);
//     }
// }
// }
// const add = new Stack()
// add.push(7)
// add.push(9)
// add.push(8)
// add.push(10)
// add.push(80)

// add.printList()

// console.log(add);





class newNode {
  constructor(data = null, next = null) {
    this.data = data
    this.next = next
  }

}

class Stack {
  constructor() {
    this.head = null
  }

  push(ele) {
    var node = new newNode(ele)
    node.next = this.head
    this.head = node
  }

  pop() {
    var temp = this.head
    this.head = this.head.next
    temp = null
  }

  display() {


    while ( this.head) {
      console.log( this.head.data)
      this.head =  this.head.next
    }
  }

}


const head = new Stack()
head.push(11)
head.push(22)
head.push(33)

head.display()



