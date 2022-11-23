let array=[11,22,33,44,55,66];

console.log(array);
function firstInsert(n)
{
    array.unshift(n);
    console.log(array);
}
function firstDelete()
{
    array.shift();
    console.log(array);
}
function lastInsert(k)
{
    array.push(k);
    console.log(array);
}
function lastDelete()
{
    array.pop();
    console.log(array);
}
const prompt = require("prompt-sync")();

let FI = parseInt(prompt("Enter a First Insert value : "));
console.log("First Insert :- ");
firstInsert(FI);

console.log("Last Delete :-");
lastDelete();

let LI = parseInt(prompt("Enter a Last Insert value : "));
console.log("last Insert :- ");
lastInsert(LI);

console.log("First Delete :- ");
firstDelete();



// let Array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// function FirstInsert(n) {
//     Arr.unshift(n);
//     console.log(Array);
// }

// function FirstDelete() {
//     Arr.shift();
//     console.log(Array);
// }

// function LastInsert(k) {
//     Arr.push(k);
//     console.log(Array);
// }

// function LastDelete() {
//     Arr.pop();
//     console.log(Array);
// }

// const prompt = require("prompt-sync")();

// console.log("...Welcome to stack...");
// console.log("1. First Insert in array.");
// console.log("2. Last Insert in array.");
// console.log("3. First Delete in array.");
// console.log("4. Last Delete in array.");

// let Choise = parseInt(prompt("Enter a choise : "));

// switch (Choise) {

//     case 1:
//         let FI = parseInt(prompt("Enter a First Insert value : "));
//         FirstInsert(FI);
//         break;

//     case 2:
//         let LI = parseInt(prompt("Enter a Last Insert value : "));
//         LastInsert(LI);
//         break;

//     case 3:
//         FirstDelete();
//         break;

//     case 4:
//         LastDelete();
//         break;

// }