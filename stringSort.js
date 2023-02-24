// var string = 'abcdefg';
// var newstring = '';

// for(let i = 0; i < string.length; i++){
//     newstring = string[i] += newstring;
// }

// console.log(newstring);




// let str = 'aslam'
// let newstr = ''

// for (let i = 0; i < str.length; i++) {
//     newstr = str[i] += newstr
// }
// console.log(newstr);



let g = ["a", "b", "c"]
// let array = [...g];
l = g.length
for (let i = 0; i < l; i++) {
    g.push(g[i])
}
console.log(g);



let a = []
function hello (arr,val){
    for (let i = 0; i < arr.length; i++) {
       if (Array.isArray(arr[i])) {
           hello(arr[i])
       }else{
        a.push(arr[i])
       }
       
    }
    return a.filter(e=>e == val);
}


let val = '.mp3'
let arr = [[[[".mp3", ".mp4", ".mp3"]], [[".mp3", [".mp3", ".mp4"]]], []]];
console.log(hello(arr,val))



