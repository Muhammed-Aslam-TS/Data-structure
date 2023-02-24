// class hashtable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total = + key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key, valu) {
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if (!bucket) {
//             this.table[index] = [[key, valu]]
//         } else {
//             let samekey = bucket.find(item => item[0] == key)
//             if (samekey) {
//                 samekey[1] = valu
//             } else {
//                 bucket.push([key, valu])
//             }
//         }
//     }

//     get(key) {
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if (bucket) {
//             let samekey = bucket.find(item => item[0] == key)
//             if (samekey) {
//                 return samekey[1]
//             }
//         }
//         return undefined
//     }

//     print() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }

//         }
//     }

// }

// let table = new hashtable(20)

// table.set('a', 70)
// table.set('e', 50)
// table.set('b', 20)



// console.log(table.get('a'));

// table.print()



mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

merge = (left, right) => {
    let sorted = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}


let arr = [5,6,7,4,3,1,2]
let sort = mergeSort(arr)
console.log(sort);