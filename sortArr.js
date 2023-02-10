
// //buble sotr
// function bublesort(arr) {
//     let swapped
//     do{
//         swapped = false
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }

//         }
//     }while(swapped)
// }
// const arr = [8,4,32,5,7,9]
// bublesort(arr)
// console.log(arr);
// console.log('bubleSort_______________');



//insertion Sort



insrtonSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i]
    let j = i - 1
    while ( arr[j] > num) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = num
  }
}
const arr1 = [5, 6, 2, 6, 1, 9]
insrtonSort(arr1)
console.log(arr1);
console.log('insertionSort_____________');

//selectionSort ___________________________






////quickSort_________________________

// function quicksort  (arr)  {
//     if (arr.length <= 1) {
//         return arr
//     }

//     let pivot = arr[0]

//     let l = []
//     let r = []

//     for (let i = 1; i < arr.length; i++) {
//         // arr[i] < pivot ? l.push(arr[i]) : r.push(arr[i])
//         if (arr[i]<pivot) {
//             l.push(arr[i])
//         }else{
//             r.push(arr[i])
//         }
//     }

//     return quicksort(l).concat(pivot, quicksort(r));
// }

// var array = [23, 45,20, 16, 37, 3, 99, 22];
// let sorted = quicksort(array);

// console.log('Sorted array', sorted);






////merge sort___________________________

function merge(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = merge(arr.slice(0, mid));
  let right = merge(arr.slice(mid))

  function mergeSort(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {

      if (arr1[i] < arr2[j]) {
        result.push(arr1[i])
        i++;
      } else {
        result.push(arr2[j])
        j++;
      }
    }

    while (i < arr1.length) {
      result.push(arr1[i])
      i++;
    }

    while (j < arr2.length) {
      result.push(arr2[j])
      j++;
    }
    return result
  }

  return mergeSort(left, right)
}

console.log(merge([1, 4, 3, 6, 2, 11, 100, 44]))