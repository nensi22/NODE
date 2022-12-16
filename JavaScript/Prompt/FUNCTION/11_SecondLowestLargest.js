/*  8. Write a python function which will take an array of numbers stored 
        and find the second lowest and second greatest numbers, respectively.               */



function SecondGreatestLowest(arr_num) {  
        arr_num.sort(function(x,y) {  
          return x-y;
        });  
      
        let uniqa = [arr_num[0]];  
        let result = [];  
      
        for(let j=1; j < arr_num.length; j++) 
        {  
          if(arr_num[j-1] !== arr_num[j]) 
          {
            uniqa.push(arr_num[j]);  
          }  
        }
      
        result.push(uniqa[1],uniqa[uniqa.length-2]);
        return result.join(',');  
      
      }  
let array=[11,22,33,44,55,66,77,88]
console.log(SecondGreatestLowest(array)); 





// let SecondGreatestLowest= (arr_num) => {  
//         arr_num.sort(function(x,y) {  
//           return x-y;
//         });  
      
//         let uniqa = [arr_num[0]];  
//         let result = [];  
      
//         for(let j=1; j < arr_num.length; j++) 
//         {  
//           if(arr_num[j-1] !== arr_num[j]) 
//           {
//             uniqa.push(arr_num[j]);  
//           }  
//         }
      
//         result.push(uniqa[1],uniqa[uniqa.length-2]);
//         return result.join(',');  
      
//       }  
      
// console.log(SecondGreatestLowest([11,22,44,55,66,77])); 


