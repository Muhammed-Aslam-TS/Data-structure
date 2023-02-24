// function mergeSort(array){
//     if (array.length<2) {
//         return array;
//     }

//     let mid = Math.floor(array.length/2)
//     let left = array.slice(0,mid)
//     let right = array.slice(mid)


//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right) {

//     let sortedArray =[]
//     let i =0;
//     let j= 0;
//     while (i < left.length && j < right.length) {
//         if (left[i]<right[j]) {
//             sortedArray.push(left[i])
//             i++
//         } else {
//             sortedArray.push(right[j])
//             j++
//         }
//     }
//     return sortedArray.concat(left.slice(i)).concat(right.slice(j))
// }



// mergeSort = (arr) => {
//     if (arr.length < 2) {
//         return arr
//     }

//     let mid = Math.floor(arr.length / 2)
//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid)

//     return merge(mergeSort(left), mergeSort(right))
// }

// merge = (left, right) => {
//     let sorted = []

//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             sorted.push(left.shift())
//         } else {
//             sorted.push(right.shift())          
//         }
//     }
//     return [...sorted,...left,...right]
// }


// let arr = [11, 5, 88, 3, 2, -5, -1, -8]
// console.log(mergeSort(arr))


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
    let sortedArray = []

    while (left.length && right.length) {
       left[0] < right[0] ? sortedArray.push(left.shift())
       : sortedArray.push(right.shift())
    }
    return [...sortedArray,...left,...right]
}

const arr = [7,6,4,3,5,2,1]
 
console.log(mergeSort(arr));