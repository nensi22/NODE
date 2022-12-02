/*

    <--> Array.prototype.splice()
                The splice() method changes the contents of an array by removing or replacing existing elements 
                and/or adding new elements in place. To access part of an array without modifying it, see slice().

                Syntax :=
                        splice(start)
                        splice(start, deleteCount)
                        splice(start, deleteCount, item1)
                        splice(start, deleteCount, item1, item2, itemN)

                Example :=
                        let arr=[1,2,3,4,5,6,7,8];
                        console.log(arr.splice(1,3));                   //      [ 2, 3, 4 ]

                        let arr=[1,2,3,4,5,6,7,8];
                        arr.splice(5,2,88,99);
                        console.log(arr);                               //      [ 1, 2, 3, 4, 5, 88, 99, 8 ]
                


*/