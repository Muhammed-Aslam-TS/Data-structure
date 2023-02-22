class Queue {
    constructor(){
        this.items = []
    }

    enqueue(elm){
        this.items.push(elm)
    }
    dequeue(){
       return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(this.items){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items);
    }

}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(100)
queue.enqueue(50)
queue.enqueue(20)

console.log(queue.peek());
queue.print()