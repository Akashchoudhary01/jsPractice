function square (n){
    return n*n;
}
function cube (n){
    return n*n*n;
}
function qard (n){
    return n*n*n*n;
}
function sumOfSomething(a , b , fn){
    let square1 = fn(a);
    let square2 = fn(b);
    return square1+square2;
}
const ans = sumOfSomething(2 , 5 , square);
console.log(ans);