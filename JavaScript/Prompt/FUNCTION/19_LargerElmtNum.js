/* 19. Write a JS function that returns array elements larger than a number.           */


function getLargest (arr, value) {
     return arr.filter(n => n > value);
}
let arr=[22,44,66,11,12] 
console.log(getLargest( arr, 16))
