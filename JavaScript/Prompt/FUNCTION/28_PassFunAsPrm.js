/* 28. Write a JS program to pass a 'JS function' as parameter.              */

let sum = (x, y) => {
    return x+y;
}
let total = (number1, number2, callback) => {
    return callback(number1, number2);
}
console.log(total(5, 9, sum));