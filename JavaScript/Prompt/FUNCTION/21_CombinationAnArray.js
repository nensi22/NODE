/* 21. Write a JS function to get all possible subset with a fixed length (for example 2) combinations in an array. 
Sample array : [1, 2, 3] and subset length is 2
Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]              */

function PossibleCom(Arr) {
    let CombinationArr = [];
    for (let i = 0; i < Arr.length; i++) {
        for (let j = i + 2; j < Arr.length + 1; j++) {
            CombinationArr.push(Arr.slice(i, j));
        }
    }
    return CombinationArr;
}
let Arr = [1, 2, 3]
console.log(PossibleCom(Arr));