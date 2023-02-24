class binary {
    constructor(data) {
        this.root = data
        this.left = null
        this.right = null
    }
}


class insertion {
    constructor() {
        this.root = null
        this.left = null
        this.right = null
    }

    insert(data) {
        let newNode = new binary(data)
        if (this.root == null) {
            this.root = newNode
        }
        while (true) {
            if (this.root > newNode) {
                if (newNode.left == null) {
                    newNode.left = newNode
                } else {
                    newNode = newNode.left
                }
            } else {
                if (newNode.right == null) {
                    newNode.right = newNode
                } else {
                    newNode = newNode.right
                }
            }
        }
    }
}

let b = new insertion()

b.insert(10)
b.insert(15)
b.insert(5)

console.log(b);