/* 22. Write a JS function that accepts two arguments, a string and a letter and the function will count the number of occurrences of 
   the specified letter within the string.             */


let charCount=(str,char)=>{
   let count=0;
   for(let i=0;i<=str.length;i++)
   {
      if(str.charAt(i)==char){
         count+=1;
      }
   }
   return count;
}
console.log(charCount("skillQode","Q"));