/* 7. Write a JS function that accepts a string as a parameter and counts the number of  vowels within the string.          */

const prompt = require("prompt-sync")();

// function countVowel(str){
//     let regex=/[aeiou]/gi;
//     let array=str.match(regex);
//     return array;
// }
// let string=prompt("Enter a string=")
// console.log(countVowel(string));



let countVowel=(str)=>{
    let regex=/[aeiou]/gi;
    let array=str.match(regex);
    return array;
}
let string=prompt("Enter a string=")
console.log(countVowel(string));