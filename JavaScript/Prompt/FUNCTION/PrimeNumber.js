/*  7. Write a python function that accepts a number as a parameter and check the number is prime or not.    */


//      Named function 
const prompt = require("prompt-sync")();

// function CheckPrimeNum(number)  {
//     if(number == 1)
//         return "1 is Constant ";
    
//     else if(number>1)
//     {
//         for(let i=2 ; i<number ; i++)
//         {
//             if(number%i == 0)
//             {
//                 return `${number} is not a prime number`;
//             }
//         }
//         return `${number} is a prime number`;
//     }
// }
// let num=parseInt(prompt("Enter a Number : "));
// console.log(CheckPrimeNum(num));


//      Anonymous function

// let CheckPrimeNum = (number) =>  {
//     if(number == 1)
//         return "1 is Constant ";
    
//     else if(number>1)
//     {
//         for(let i=2 ; i<number ; i++)
//         {
//             if(number%i == 0)
//             {
//                 return `${number} is not a prime number`;
//             }
//         }
//         return `${number} is a prime number`;
//     }
// }
// let num=parseInt(prompt("Enter a Number : "));
// console.log(CheckPrimeNum(num));