const http= require("http");
const server=http.createServer((req,res)=>{
    res.write("hello");
    console.log("connected");
    res.end();
})
.listen(3003,()=>{
    console.log("server connected on port 3003");
})