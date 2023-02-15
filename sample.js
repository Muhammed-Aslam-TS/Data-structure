
class hashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const samekey = bucket.find(item => item[0] == key)
            if (samekey) {
                samekey[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKey = bucket.find(item => item[0] == key)
            return sameKey[1]
        }
    }

    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }

        }
    }
}


const table = new hashTable(50)

table.set('n', 20)
table.set('m', 10)
table.set('g', 30)

console.log(table.get('n'));

table.print()


class que {
    constructor() {
        this.items = []
    }

    Nque(val){
        this.items.push(val)
    }

    Dque(){
        this.items.shift()
    }

    disply(){
        
            
            
        console.log(this.items);
    }
}


const Queue = new que()
console.log('q,,,,,,,,,,,,,,,,,,,,,,,,,,,,');
Queue.Nque(10)
Queue.Nque(20)
Queue.Nque(30)
Queue.Nque(2030)
Queue.Dque()
Queue.Dque()
Queue.disply()


