/* 12. Write a JS function which says whether a number is perfect. 
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently,
the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14.
This is followed by the perfect numbers 496 and 8128.                                  */


const prompt = require("prompt-sync")();


// function perfectNumber(num)
// {
//     let temp=0;
//     for(let i=1 ;i<=num/2 ;i++)
//     {
//         if(num%i==0)
//         {
//             temp+=i;
//         }
//     }
//     return(temp==num && temp!=0)?`${num} is perfect number`:`${num} is not perfect number`;

// }
// let number = prompt('Enter a  number: ');
// console.log(perfectNumber(number));



let perfectNumber=(num)=>{
    let temp=0;
    for(let i=1 ;i<=num/2 ;i++)
    {
        if(num%i==0)
        {
            temp+=i;
        }
    }
    return(temp==num && temp!=0)?`${num} is perfect number`:`${num} is not perfect number`;

}
let number = prompt('Enter a  number: ');
console.log(perfectNumber(number));