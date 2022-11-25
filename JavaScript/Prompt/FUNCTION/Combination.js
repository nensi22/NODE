/*  3.Write a JS function that generates all combinations of a string. 
Example string : 'dog'
Expected Output : d,do,dog,o,og,g */

//  Named function

// function CombinationOfString(Str){
//     let CombinationArr = [];
//     for (let i = 0; i < Str.length; i++) {
//         for (let j = i + 1; j < Str.length + 1; j++) {
//             CombinationArr.push(Str.slice(i, j));
//         }
//     }
//     return CombinationArr.join();
// }
// console.log(CombinationOfString("dog"));


//Anonymous function

// let CombinationOfString = (Str) => {
//     let CombinationArr = [];
//     for (let i = 0; i < Str.length; i++) {
//         for (let j = i + 1; j < Str.length + 1; j++) {
//             CombinationArr.push(Str.slice(i, j));
//         }
//     }
//     return CombinationArr.join();
// }
// console.log(CombinationOfString("dog"));