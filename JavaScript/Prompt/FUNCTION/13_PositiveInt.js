/* 13. Write a JS function to compute the factors of a positive integer.    */


const prompt = require("prompt-sync")();

// function computeFactor(num){
//     let factor=[];
//     for(let i=1;i<=num;i++)
//     {
//         if(num%i==0)
//         {
//             factor.push(i);
//         }
//     } 
//     return factor;  
// }
// let  number = prompt('Enter a positive number: ');
// console.log(computeFactor(number));



let computeFactor=(num)=>{
    let factor=[];
    for(let i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            factor.push(i);
        }
    } 
    return factor;  
}
let  number = prompt('Enter a positive number: ');
console.log(computeFactor(number));