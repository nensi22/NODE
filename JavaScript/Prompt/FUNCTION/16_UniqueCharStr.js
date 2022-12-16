/* 16. Write a JS function to extract unique characters from a string. 
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"                             */


function uniqueChar(str){
    let res="";
    for (let i=0;i<str.length;i++  ){
        if(res.indexOf(str.charAt(i))==-1){
            res+=str[i];
        }
    }
    return res;
}
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));