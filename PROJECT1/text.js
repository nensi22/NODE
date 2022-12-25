// const text1=document.getElementById("text1");
// const text2=document.getElementById("text2");
// const submit=document.getElementById("submit");

window.onload=function(){
    const txt1=document.getElementById("txt1");
    const txt2=document.getElementById("txt2");
    const submit=document.getElementById("submit");
    const ans=document.getElementById("ans");
    
    submit.addEventListener('click',()=>{
        console.log(" button clicks");
        console.log(`${txt1} and ${txt2}`)
        console.log(+txt1.value + +txt2.value)
        ans.value=(+txt1.value + +txt2.value)
    })
}