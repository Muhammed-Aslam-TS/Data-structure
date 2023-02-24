class Stack {
    constructor() {
        this.items = []
    }

    push(elm) {
        this.items.push(elm)
    }

    pop(elm) {
    
        this.items.pop(elm)
       
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString());
    }
}

const stack = new Stack()

stack.push(20)
stack.push(50)
stack.push(10)
stack.push(80)




console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());
stack.print()



