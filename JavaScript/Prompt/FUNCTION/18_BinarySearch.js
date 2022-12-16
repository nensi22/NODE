/* 18. Write a function for searching JS arrays with a binary search. 
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.          */


let binarySearch=(array,element)=>
{
    array=sort(array);
    let low=0;
    let high=array.length-1;
    while(low<=high)
    {
        let mid=Math.floor((low+high)/2);
   
        if (array[mid] == element) {
            return true;
        } else if (array[mid] < element) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}
let sort = (array) => {
    array.sort(compareNum);
    return array;
}
let compareNum = (a, b) => {
    return a - b;
}
let array = [1,2,3,4,5,6,7];
console.log(binarySearch(array,11));