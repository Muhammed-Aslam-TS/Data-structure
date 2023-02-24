let num = 1
function hello() {
    console.log('hello', num);
    num++
    if (num<=10) {
        hello()
    }
}
hello()

