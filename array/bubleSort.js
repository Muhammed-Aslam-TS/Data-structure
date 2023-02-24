bubleSort = (arr) => {

    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1]
                arr[i + 1] = arr[i]
                arr[i] = temp
                swapped = true
            }

        }
    } while (swapped)
}


let arr = [5, 7, 8, 1, 8, 3, 0, 2, 3]
bubleSort(arr)
console.log(arr);




