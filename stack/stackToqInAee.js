class Stack {
    constructor() {
        this.items = []
        this.size = 0
    }

    push(data) {
        this.items.push(data)
        this.size++
    }
    pop() {
        let rmv = this.items.pop()
        this.size--
        return rmv
    }
}

class Que {
    constructor() {
        this.items = []
        this.size = 0
    }

    nq(data) {
        this.items.push(data)
        this.size++
    }
}


const stack = new Stack()
const que = new Que

stack.push(4)
stack.push(8)
stack.push(5)
stack.push(6)
stack.push(53)
stack.push(10)

que.nq(stack.pop())
que.nq(stack.pop())
que.nq(stack.pop())

console.log(stack);
console.log(que);