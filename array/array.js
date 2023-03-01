// let a = [100, 200, 300, 400, 500, 100, 300]
// //reverse____________________________________



// for (let i = a.length; i >= 0; i--) {
//     console.log(a[i]);
// }
// console.log('array reversed');


// //length________________________________


// var length = 0
// while (a[length] !== undefined) {
//     length++
// }
// // for (let i = 0; i <=a.length-1; i++) {
// //   length++

// // }
// console.log(length);

// console.log('array length');


// //sum_________________________________

// var sum = 0

// for (let i = 0; i < a.length; i++) {
//     sum += a[i]
// }
// console.log(sum);
// console.log('array sum');


// //large seccound largest________________________________


// let larg = Number.MIN_VALUE
// let second

// for (let i = 0; i < a.length; i++) {

//     if (a[i] > larg) {
//         second = larg
//         larg = a[i]
//     } else {
//         if (a[i] > second) {
//             second = a[i]
//         }
//     }
// }
// console.log('large is', larg);
// console.log('second is', second);
// console.log('______________large$ seccound');

// //ood $ even______________________________



// for (let i = 2; i < a.length; i++) {
//     if
//         (i % 2 == 0) {
//         console.log('even is', a[i]);
//     } else {
//         if (i % 3 == 0) {
//             console.log('odd is_______', a[i]);
//         }
//     }
// }


// //meerge_____________________________

// let b = [600, 700, 800, 900, 1000]
// let c = []
// let j = 0
// let l = a.length + b.length
// for (let i = 0; i < l; i++) {
//     if (i < a.length) {
//         c.push(a[i])
//     } else {
//         c.push(b[j])
//         j++
//     }
// }
// console.log(c);



// //duplicet __________________________________



// let count = 0
// let nv = [0]
// for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//         if (a[i] == a[j]) {
//             count++
//             break;
//         }


//     }

// }
// console.log(count, '____________________________jjjj');



// //serch______________________________

// const serch = (arr, val) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (val === arr[i]) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(serch(a, 100), 'serch_____________________');

// //baynery serch___________________________________

// const bynery = (arr, val) => {

//     let lover = 0
//     let upper = arr.length - 1

//     while (lover <= upper) {
//         let middle = Math.floor((lover + upper) / 2)
//         if (val === arr[middle]) {
//             return middle;
//         }
//         if (val < arr[middle]) {
//             upper = middle - 1
//         } else {
//             lover = middle + 1
//         }
//     }

// }
// let arr = [1, 3, 5, 6, 7, 5, 4, 3, 44]
// console.log(bynery(arr, 44), 'bainery_________________');


// //small______________________________

// let newark = [44, 11, 55, 5, 7, 57, 35, 23, 54, 75]

// let small = newark[0]
// let large = Number.MIN_VALUE

// //let newval = small + large


// for (let i = 0; i < newark.length; i++) {
//     if (newark[i] < small) {
//         small = newark[i]
//     }
//     if (large < newark[i]) {
//         large = newark[i]
//     }
// }
// console.log(small, large);
// let val = small + large

// console.log(val);
// newark.push(val)
// console.log(newark);




// let a1 = [5, 3, 66, 16, 99, 4]

// large = small = a1[0];

// for (i = 1; i < a1.length; ++i) {
//     if (a1[i] > large)
//         large = a1[i];

//     if (a1[i] < small)
//         small = a1[i];
// }

// console.log(small);
// console.log(large);




// prime number_____________________

// let arr = [ 2, 7, 11, 4, 72, 5, 6]
// let n = arr.length




// for (i = 0; i < n; i++) {
//     counter = 0;
//     for (j = 2; j < arr[i]; j++) {
//         if (arr[i] % j == 0) {
//             counter = 1;
//         }
//         break;
//     }
//     if (counter == 0) {
//        console.log(arr[i]);
//     }
// }


