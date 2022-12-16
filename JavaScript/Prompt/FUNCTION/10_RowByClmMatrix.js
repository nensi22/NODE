/* 10. Write a JS function which returns the n rows by n columns identity matrix.  */


// function indentityMetrix(n) {
//     let result=[];
//     for(let i=0; i<n; i++) {
//         let arr=[];
//         for(let j=0; j<n; j++) {
//             if(i == j)  {
//                 arr.push(1);
//             }
//             else {
//                 arr.push(0);            
//             }
//         }
//         result.push(arr);
        
//     }
//     return result;
// }
// console.log(indentityMetrix(3));




let  indentityMetrix = (n) => {
    let result=[];
    for(let i=0; i<n; i++) {
        let arr=[];
        for(let j=0; j<n; j++) {
            if(i == j)  {
                arr.push(1);
            }
            else {
                arr.push(0);            
            }
        }
        result.push(arr);
        
    }
    return result;
}
console.log(indentityMetrix(3));