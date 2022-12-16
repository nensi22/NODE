/* 23. Write a JS function to find the first not repeated character. 
Sample arguments : 'abacddbec'
Expected output : 'e'     */


function FirstNonRepeat(str){
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
          return char;
        }
      }
      return " ";
}
console.log(FirstNonRepeat('abacddbec'));