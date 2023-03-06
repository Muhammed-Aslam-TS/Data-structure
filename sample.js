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

    inOrder(node) {
        if (node) {
            this.inOrder(node.left)
            console.log(node.data);
            this.inOrder(node.right)
        }
    }

    preOrder(node) {
        if (node) {
            console.log(node.data);
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
}

const b = new bst()

b.insert(10)
b.insert(20)
b.insert(15)
b.insert(30)

b.insert(18)

console.log(b);

b.inOrder(b.root)

console.log("___________________________");

b.preOrder(b.root)