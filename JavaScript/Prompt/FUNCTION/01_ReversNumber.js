/*  1. Write a JS function that reverse a number.
Example x = 32243;
Expected Output : 34223 */


const prompt = require("prompt-sync")();

function reverseNumber(x){
    let reverse=0,reminder=0;
    while(x!=0)
    {
      reminder=x%10;
      reverse=(reverse*10)+reminder;
      x=Math.floor(x/10);
    }
    console.log(`Revers a Number is : ${reverse}`);
}
let number = prompt('Enter a  number: ');
console.log(Number(reverseNumber(number)));



// function reverseNumber(x)
// {
// 	x = x + "";
// 	return x.split("").reverse().join("");
// }
// let number = prompt('Enter a  number: ');
// console.log(Number(reverseNumber(number)));




// let reverseNumber = (x) => {
//     let reverse=0,reminder=0;
//     while(x!=0)
//     {
//       reminder=x%10;
//       reverse=(reverse*10)+reminder;
//       x=Math.floor(x/10);
//     }
//     console.log(`Revers a Number is : ${reverse}`);
// }
// let number = prompt('Enter a  number: ');
// console.log(Number(reverseNumber(number)));



// let reverseNumber = (x) => {
// 	x = x + "";
// 	return x.split("").reverse().join("");
// }
// let number = prompt('Enter a  number: ');
// console.log(Number(reverseNumber(number)));