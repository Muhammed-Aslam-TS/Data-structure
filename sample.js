// class Node{
//     constructor(data){
//         this.data =data
//         this.left = null
//         this.right = null
//     }
// }

// class bst{
//     constructor(){
//         this.root = null
//     }

//     insert(data){
//         const newNode = new Node(data)
//         if (!this.root) {
//             this.root = newNode
//             return this
//         }
//         let current = this.root
//         while (true) {

//             if (data == current.data) {
//                 return undefined
//             }

//             if (data < current.data) {
//                 if (!current.left) {
//                     current.left = newNode
//                 }
//                 current = current.left
//             }else{
//                 if (!current.right) {
//                     current.right = newNode
//                 }
//                 current = current.right
//             }
//         }
//     }

//     inOrder(node){
//         if (node) {
//             this.inOrder(node.left)
//             console.log(node.data);
//             this.inOrder(node.right)
//         }
//     }

//     preOrder(node){
//         if (node) {
//             console.log(node.data);
//             this.preOrder(node.left)
//             this.preOrder(node.right)
//         }
//     }

//     postOrder(node){
//         if (node) {
//             this.postOrder(node.left)
//             this.postOrder(node.right)
//             console.log(node.data);
//         }
//     }
// }


// const list = new bst()

// list.insert(50)
// list.insert(30)
// list.insert(20)
// list.insert(10)
// list.insert(25)
// list.insert(22)
// list.insert(15)
// list.insert(18)
// list.insert(5)
// console.log(list);

// list.postOrder(list.root)

// class Heap {
//     constructor(data) {
//         thid.heap = []
//     }

//     rootNode(data) {
//         return Math.floor((data - 1) / 2)
//     }

//     leftNode(data) {
//         return (data * 2 + 1)
//     }

//     rightNode(data) {
//         return (data * 2 + 2)
//     }
//     swap(a, b) {
//         let temp = this.heap[a]
//         this.heap[a] = this.heap[b]
//         this.heap[a] = temp
//     }

//     insert(item) {
//         this.heap.push(item)
//         let index = this.heap.length - 1
//         let parent = this.rootNode(data)

//         while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
//             this.swap(index, parent)
//             index = this.rootNode[item]
//             parent = this.rootNode[item]

//         }
//     }
// }

class graph {
    constructor() {
        this.element = {}
    }


    vertex(vertex) {
        if (!this.element[vertex]) {
            this.element[vertex] = new Set()
        }
    }

    edge(vertex1, vertex2) {
        if (!this.element[vertex1]) {
            this.element[vertex1]
        }
        if (!this.element[vertex2]) {
            this.element[vertex2]
        }

        this.element[vertex1].add(vertex2)
        this.element[vertex2].add(vertex1)
    }


}

let x = new graph()

x.vertex('a')
x.vertex('b')
x.vertex('c')
x.vertex('d')

x.edge('a', 'b')
x.edge('b', 'c')
x.edge('c', 'd')
console.log(x);






class heep {
    constructor() {
        this.heep = []
    }

    parentNode(index) {
        return Math.floor((index - 1) / 2)
    }

    leftNode(index) {
        return (2 * index + 1)
    }

    swap(a, b) {
        let temp = this.heep[a]
        this.heep[a] = this.heep[b]
        this.heep[b] = temp
    }

    insert(item) {
        this.heep.push(item)
        let index = this.heep.length - 1
        let parent = this.parentNode(index)
        while (this.heep[parent] && this.heep[parent] < this.heep[index]) {
            this.swap(parent, index)
            index = this.parentNode(index)
            parent = this.parentNode(index)
        }
    }
}

const h = new heep()
h.insert(56)
h.insert(20)
h.insert(80)
h.insert(70)
h.insert(20)
h.insert(10)
console.log(h);
console.log(h.leftNode(2));




class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class bst {
    constructor() {
        this.root = null
    }

    insert(data) {
        const newNode = new Node(data)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root

        while (true) {
            if (data == current.data) {
                return undefined
            }
            if (data < current.data) {
                if (!current.left) {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }


    delete(data) {

        const deleteNode = (node, data) => {
            if (node == null) {
                return null
            }

            if (data < node.data) {
                node.left = deleteNode(node.left, data)
            } else if (data > node.data) {
                node.right = deleteNode(node.right, data)
            } else {
                if (node.left == null && node.right == null) {
                    node = null
                } else if (node.left == null) {
                    node = node.right
                } else if (node.right == null) {
                    node = node.left
                } else {
                    let temp = this.minNode(node.right)
                    node.data = temp.data
                    node.right = this.minNode(node.right, temp.data)
                }
            }
            return node
        }
        return this.root = deleteNode(this.root, data)
    }

    minNode(node) {
        if (node.left == null) {
            return node
        }
        return this.minNode(node.left)
    }
}



const b = new bst()

b.insert(15)
b.insert(10)
b.insert(20)
b.insert(18)
b.insert(5)
b.insert(25)
b.insert(21)
b.insert(8)
b.delete(20)

console.log(b);


