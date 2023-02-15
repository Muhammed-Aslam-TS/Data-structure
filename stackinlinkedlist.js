class Node {
  constructor(data,next){
    this.data = data
    this.next = null
  }
}


class Stack {
  constructor(){
    this.head = null
  }

  push(elm){
    const node = new Node(elm)
    node.next = this.head
    this.head = node 
  }

  pop(){
    let temp = this.head 
    this.head = this.head.next
    temp = null
  }

  printList(){
    let currentNode = this.head
    while(currentNode != null){
        console.log(currentNode.data);
        currentNode =  currentNode.next   
    }
}
}
const add = new Stack()
add.push(7)
add.push(9)
add.push(8)
add.printList()







// class newNode 
// {
//   constructor (data, next) 
//   {
//     this.data = data
//     this.next = null
//   }

// }

// class Stack
// {
//   constructor () 
//   {
//     this.head = null
//   }

//   push(ele)
//   {
// 	  var node=new newNode(ele)   
// 	  node.next=this.head
// 	  this.head=node
//   }

//   pop()
//   {
// 	  var temp=this.head
// 	  this.head=this.head.next
// 	  temp=null
//   }

//   display()
//   {

//       var temp=this.head
//       while(temp!=null)
//       {
//         console.log(temp.data)
//         temp=temp.next
//       }
//   }

// }


// const head = new Stack()
// head.push(11)
// head.push(22)
// head.push(33)
// head.push(44)
// head.push(55)
// head.push(66)
// console.log("After PUSH...")
// head.display()
// head.pop()
// console.log("After POP...")
// head.display()
// head.pop()
// console.log("After POP...")
// head.display()


