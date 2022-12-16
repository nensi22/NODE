/*  6. Write a JS function that accepts a string as a parameter and find the longest word within the string. 
    Example string : 'Web Development Tutorial'
    Expected Output : 'Development'                      */


const prompt = require("prompt-sync")();

// function longestWord(str)  {
//     let arr = str.split(' ');
//     let longestWord =arr[0]   ;
//     for(let i=0; i<arr.length; i++) {
//         if(longestWord.length < arr[i].length) {
//             longestWord = arr[i];
//         }
//     } 
//     return longestWord;
// }
// let string=prompt("Enter a string=")
// console.log(longestWord(string));




let longestWord=(str)=>{
    let arr = str.split(' ');
    let longestWord =arr[0]   ;
    for(let i=0; i<arr.length; i++) {
        if(longestWord.length < arr[i].length) {
            longestWord = arr[i];
        }
    } 
    return longestWord;
}
let string=prompt("Enter a string=")
console.log(longestWord(string));