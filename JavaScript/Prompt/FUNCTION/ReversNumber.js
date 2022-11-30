/*  1. Write a JS function that reverse a number.
Example x = 32243;
Expected Output : 34223 */

// Named function
// function reverseNumber(x){
//     let reverse=0,reminder=0;
//     while(x!=0)
//     {
//       reminder=x%10;
//       reverse=(reverse*10)+reminder;
//       x=Math.floor(x/10);
//     }
//     console.log(`Revers a Number is : ${reverse}`);
// }
// reverseNumber(32243);

// function reverseNumber(x)
// {
// 	x = x + "";
// 	return x.split("").reverse().join("");
// }
// console.log(Number(reverseNumber(32243)));


// Anonymous function

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
// reverseNumber(32243);

// let reverseNumber = (x) => {
// 	x = x + "";
// 	return x.split("").reverse().join("");
// }
// console.log(Number(reverseNumber(32243)));