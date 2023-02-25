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
                current = current.ri
            }
        }
    }
    find(data) {
        if (!this.root) {
            return false
        }

        let current = this.root
        let found = false

        while (current && !found) {
            if (data === current.data) {
                found =  true
            } else if (data < current.data) {
                current = current.left
            } else {
                current = current.left
            }
        }
        if (!found) {
            return false
        }
        return current
    }
}

const list = new binarySearchTree()
list.insert(10)
list.insert(5)
list.insert(15)
list.insert(7)
list.insert(3)
list.insert(2)




console.log(list);

console.log(list.find(5));