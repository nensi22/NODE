/*  1. Write a JS function that reverse a number.
Example x = 32243;
Expected Output : 34223 */

// Named function
let reverse=0,reminder=0;
function reverseNumber(x){
    while(x!=0)
    {
      reminder=x%10;
      reverse=(reverse*10)+reminder;
      x=Math.floor(x/10);
    }
    console.log(`Revers a Number is : ${reverse}`);
}

reverseNumber(32243);


// Anonymous function

// let rereversev=0,reminder=0;
// let reversNumber = (x) => {
//     while(x!=0)
//         {
//           reminder=x%10;
//           reverse=(reverse*10)+reminder;
//           x=Math.floor(x/10);
//         }
//     console.log(`Revers a Number is : ${reverse}`);
// }
//  reverseNumber(32243);


