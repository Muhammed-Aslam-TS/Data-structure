// class Node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }

// class binarySearchTree {
//     constructor() {
//         this.root = null
//     }

//     insert(data) {
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

//     find(data) {
//         if (!this.root) {
//             return false
//         }

//         let current = this.root
//         let found = false

//         while (current && !found) {
//             if (data === current.data) {
//                 found = true
//             } else if (data < current.data) {
//                 current = current.left
//             } else {
//                 current = current.right
//             }
//         }
//         if (!found) {
//             return false
//         }
//         return current
//     }


//     inOrder(node) {
//         if (node.left) {
//             this.inOrder(node.left)
//         }
//         console.log(node.data);
//         if (node.right) {
//             this.inOrder(node.right)
//         }
//     }


//     priOrder(node) {
//         console.log(node.data);
//         if (node.left) {
//             this.priOrder(node.left)
//         }
//         if (node.right) {
//             this.priOrder(node.right)

//         }
//     }

//     postOrder(node){
//         if (node.left) {
//             this.postOrder(node.left)
//         }
//         if (node.right) {
//             this.postOrder(node.right)
//         }
//         console.log(node.data);
//     }
// }

// const bst = new binarySearchTree()
// bst.insert(8);
// bst.insert(3);
// bst.insert(10);
// bst.insert(1);
// bst.insert(6);
// bst.insert(14);
// bst.insert(4);
// bst.insert(7);
// bst.insert(13);


// console.log(bst);
// bst.inOrder(bst.root)
// console.log('_____inOrder________________');
// bst.priOrder(bst.root)
// console.log('_____priOrder________________');
// bst.postOrder(bst.root)
// console.log('_____postOrder________________');



class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class bsTree {
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


    find(data) {
        let current = this.root
        while (current != null) {
            if (data < current.data) {
                current = current.left
            }
            else if (data > current.data) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }

}


const bst = new bsTree()
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log(bst);

console.log(bst.find(7));
console.log(bst.find(15));
console.log(bst.find(8));


