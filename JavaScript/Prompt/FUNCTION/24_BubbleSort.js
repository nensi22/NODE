/* 24. Write a JS function to apply Bubble Sort algorithm. 
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly 
stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]              */


function bubbleSort(arr) {
    return arr.reduce((res, n, i) => {
      for (let j = 0; j < res.length; j++) {
        if (res[i] > res[j]) {
          let v = res[j];
          res[j] = res[i];
          res[i] = v;
        }
      }
      return res;
    }, arr.slice());
  }
let array=[12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log(bubbleSort(array));