// const fs = require("fs");
// fs.readFile("First.txt", "utf8", (error, data) => {
//     if (error) console.log(error);
//     else console.log(data);
// });

// fs.copyFile("file1.txt", "file1(copy).txt", (error) => {
//     if (error) console.log(error);
// });

fs.readFile("First.txt", "utf8", (error, data) => {
    if (error) console.log(error);
    else fs.writeFile("First(copy).txt", data, (error) => {
        if (error) console.log(error);
        else console.log("file copy.....!!!!");
    });
});

let data = "skillQode";

fs.writeFile("file1.txt", data, (error) => {
    if (error) console.log(error);
    else console.log("file write .....!!!!");
});

// fs.rename("file1.txt", "file12.txt", (error) => {
//     if (error) console.log(error);
//     else console.log("file write .....!!!!");
// })

// fs.stat("First.txt", (error, data) => {
//     if (error) console.log(error);
//     else console.log( data);
// });

// fs.unlink("First().txt", (error) => {
//     if (error) console.log(error);
//     else console.log("file delete......!!!!");
// });


// const os = require("os")
// console.log("Cpu information : " + os.cpus());