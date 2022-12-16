/* 15. Write a JS function to compute the value of bn where n is the exponent and b is the bases. Accept b and n 
   from the user and display the result.                                    */



const prompt = require("prompt-sync")();

function calculatePower(base,exp){
   return Math.pow(base, exp);
}
let number = parseInt(prompt("Enter a value : "));
let pow = parseInt(prompt("Enter a pow value : "));
console.log(calculatePower(number, pow));




// let calculatePower=(base,exp)=>{
//    return Math.pow(base, exp);
// }
// let number = parseInt(prompt("Enter a value : "));
// let pow = parseInt(prompt("Enter a pow value : "));
// console.log(calculatePower(number, pow));