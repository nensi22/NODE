// const fs = require("fs");
// fs.readFile("file.txt","utf-8",(err,data)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log(data);
// });


// let content = "having fun!!!!!!!!!!!!!!! writeFileSync";
// fs.writeFile("file1.txt",content,"utf-8",(err)=>{
//     if(err)
//     console.log(err)
//     else
//     console.log("File writing done.....");
// });


// data = fs.readFileSync("file1.txt","utf-8");
// console.log(data);

// fs.writeFileSync("file1.txt",content,"utf-8");

 // fs.rename("file1.txt","file12.txt",(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log();
// });

// fs.unlink("file1.txt",(err,data)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log(data);
// });


// fs.stat("file1.txt",(err,data)=>{
//         if(err)
//         console.log(err);
//         else
//         console.log(data);
//     });



// fs.copyFile("file1.txt","file_copy",(err,data)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log(data);
// })


const os = require("os");
// console.log("cpu information :" + os.cpus());
 console.log("cpu information :" + os.machine());