insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i]
        j = i - 1
        while (arr[j] > num) {
            arr[j + 1] = arr[j]
            j = j-1
        }
        arr[j + 1] = num
    }
}

let arr = [5, 2, 3, 1,4]
insertionSort(arr)  

console.log(arr);