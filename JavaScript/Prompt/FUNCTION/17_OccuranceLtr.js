/* 17. Write a JS function to  get the number of occurrences of each letter in specified string.              */

function Occurrences  (String) {
    String = String.toLowerCase().split("").sort().join("");
    let result = [];
        for (let i of String) {
            let Arr = [];
            Arr = [...String.matchAll(i)];
            result.push(`${i} : ${Arr.length}`);
        }
        // let result = [];
        for (let i of result) {
            if (!(result.includes(i))) {
                result.push(i);
            }
        }
        return result;
    }
console.log(Occurrences('helloworld'));