quikeSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    let piv = arr[0]
    let l = []
    let r = []

    for (let i = 1; i < arr.length; i++) {

        arr[i] < piv ? l.push(arr[i]) : r.push(arr[i])
    }

    return quikeSort(l).concat(piv, quikeSort(r))
}


let arr = [8, 7, 5, 9, 10, 2, 6, 11, 1, 12]
let sorted = quikeSort(arr)

console.log(sorted);

