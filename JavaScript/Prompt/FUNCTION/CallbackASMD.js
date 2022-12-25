// function Add(num,callback)  {
//     return callback(num+10,false)
// }

// function Sub(num,callback)  {
//     return callback(num-5,false)
// }

// function Mul(num,callback)  {
//     return callback(num*2,false)
// }

// function Div(num,callback)  {
//     return callback(num/3,false)
// }

// Add(10,(Addres,error)=>{
//     if(!error)  
//     {   console.log('Addition :',Addres)
//         Sub(Addres,(Subres,error)=>{
//             if(!error)
//             {   console.log('Subtraction :',Subres)
//                 Mul(Subres,(Mulres,error)=>{
//                     if(!error)
//                     {   console.log('Multiplication :',Mulres)
//                         Div(Mulres,(Divres,error)=>{
//                             if(!error)  
//                             {   console.log('Division :',Divres)

//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })



// function Add(num,callback)  {
    
//     return callback(num+10,false)
// }

// function Sub(num,callback)  {
//     return callback(num-5,false)
// }

// function Mul(num,callback)  {
//     return callback(num*2,false)
// }

// function Div(num,callback)  {
//     return callback(num/3,false)
// }

// Add('10',(Addres,error)=>{
//     console.log(typeof Addres)
//     if(!error === Number)  
//     {   console.log('Addition :',Addres)
//         Sub(Addres,(Subres,error)=>{
//             if(!error)
//             {   console.log('Subtraction :',Subres)
//                 Mul(Subres,(Mulres,error)=>{
//                     if(!error)
//                     {   console.log('Multiplication :',Mulres)
//                         Div(Mulres,(Divres,error)=>{
//                             if(!error)  
//                             {   console.log('Division :',Divres)

//                             }
//                             else{
//                                 console.log("Error Division")
//                             }
//                         })
//                     }
//                     else{
//                         console.log("Error Multiplication")
//                     }
//                 })
//             }
//             else{
//                 console.log("Error Subtarction")
//             }
//         })
//     }
//     else{
//         console.log("Error Addition")
//     }
// })



let Add = (num1,num2) => {
    console.log("Addition ___ ",num1+num2)
    return Sub;
};
let Sub = (num1,num2) => {
    console.log("Subtraction ___ ",num1-num2)
    return Mul;
};
let Mul = (num1,num2) => {
    console.log("Multiplication ___ ",num1*num2)
    return Div;
};
let Div = (num1,num2) => {
    console.log("Division ___ ",num1/num2)
};

Add(10,10)(20,5)(100,10);