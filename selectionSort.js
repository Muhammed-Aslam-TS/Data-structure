let arr = [7,4,6,5,-5,2,3,1]

for (let i = 0; i < arr.length-1; i++) {
   for (let j = i+1; j < arr.length; j++) {
    if (arr[i]>arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    } 
   }
}

console.log(arr);