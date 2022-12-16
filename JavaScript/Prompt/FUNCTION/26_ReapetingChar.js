/* 26. Write a JS function to find a substring in a given a string without repeating characters.  */

let uniqueChar = (Str) => {
    let res = "";
    for (let i of Str) {
        if (res.match(i) != i) {
            res += i;
        }
    }
    return res;
}
let str = "thequickbrownfoxjumpsoverthelazydog"
console.log(str);
console.log(uniqueChar(str)); 