class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class binarySearchTree {
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
             }else{
                 return true
             }
         }
         return false
     }



    remove(data) {

        const deleteNode = (node, data) => {
            if (node === null) {
                return null;
            }
            if (data < node.data) {
                node.left = deleteNode(node.left, data);
            } else if (data > node.data) {
                node.right = deleteNode(node.right, data);
            } else {
                if (node.left === null && node.right === null) {
                    node = null
                } else if (node.left === null) {
                    node = node.right;
                } else if (node.right === null) {
                    node = node.left;
                } else {
                    let temp = this.minNode(node.right);
                    node.data = temp.data;
                    node.right = deleteNode(node.right, temp.data);
                }
            }
            return node;
        };

        this.root = deleteNode(this.root, data);
    }

    minNode(node) {
        if (node.left === null) {
            return node;
        }
        return this.minNode(node.left);
    }


    inOrder(node) {
        if (node.left) {
            this.inOrder(node.left)
        }
        console.log(node.data);
        if (node.right) {
            this.inOrder(node.right)
        }
    }
    
    
    priOrder(node) {
        console.log(node.data);
        if (node.left) {
            this.priOrder(node.left)
        }
        if (node.right) {
            this.priOrder(node.right)
    
        }
    }
    
    postOrder(node) {
        if (node.left) {
            this.postOrder(node.left)
        }
        if (node.right) {
            this.postOrder(node.right)
        }
        console.log(node.data);
    }
}


const bst = new binarySearchTree()
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);


bst.remove(10)

console.log(bst);

bst.inOrder(bst.root)
console.log('_____inOrder________________');
bst.priOrder(bst.root)
console.log('_____priOrder________________');
// bst.postOrder(bst.root)
// console.log('_____postOrder________________');

// console.log(bst.find(6));



