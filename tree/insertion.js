
// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }

//     insert(value) {
//         const newNode = new Node(value)

//         if (!this.root) {
//             this.root = newNode
//             return this
//         }

//         let current = this.root
//         while (true) {
//             if (value === current.value) {
//                 return undefined
//             }

//             if (value < current.value) {
//                 if (!current.left) {
//                     current.left = newNode
//                     return this
//                 }
//                 current = current.left
//             } else {
//                 if (!current.right) {
//                     current.right = newNode
//                     return this
//                 }
//                 current = current.right
//             }
//         }
//     }
// }

// const bst = new BinarySearchTree()

// bst.insert(11)
// bst.insert(5)
// bst.insert(20)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)
// console.log(bst);



class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class Bst {
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
            if (data === current.data) {
                return undefined
            }

            if (data < current.data) {
                if (!current.left) {
                    current.left = newNode
                    return this
                }
                current = current.left
            }else{
                if (!current.right) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }
}

const B = new Bst()
B.insert(18)
B.insert(89)
B.insert(9)
B.insert(13)
B.insert(56)
B.insert(43)
B.insert(3)
B.insert(5)
console.log(B);