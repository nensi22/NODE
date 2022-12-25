/* 27. Write a JS function that returns the longest palindrome in a given string.           */

let longestPlindrom = (string) => {
    let result = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 2; j < string.length + 1; j++) {
            let x = string.slice(i, j);
            let y = string.slice(i, j).split("").reverse().join('');
            if (x == y) {
                result.push(x);
            }
        }
    }
    return check(result);
}
let check = (Arr) => {
    let largerLength = Arr[0].length;
    for (let i of Arr) {
        if (i.length > largerLength) {
            largerLength = i.length;
        }
    }
    return Arr.filter(x => x.length == largerLength);
}
console.log(longestPlindrom("nannoonisredder"));