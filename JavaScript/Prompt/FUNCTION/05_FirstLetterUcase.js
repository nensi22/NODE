/*  5. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '                    */


const prompt = require("prompt-sync")();

// function FristLatterUcase(str)
// {
//   let array = str.split(' ');
//   let newarray = [];
    
//   for(let x = 0; x < array.length; x++){
//       newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
//   }
//   return newarray.join(' ');
// }
// let string=prompt("Enter a string=")
// console.log(FristLatterUcase(string));





let FristLatterUcase = (str) => {
  let array = str.split(' ');
  let newarray = [];
    
  for(let x = 0; x < array.length; x++){
      newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
  }
  return newarray.join(' ');
}
let string=prompt("Enter a string=")
console.log(FristLatterUcase(string));
