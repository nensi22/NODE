/*

    <--> Array.prototype.flat()
                The flat() method creates a new array with all sub-array elements concatenated into it 
                recursively up to the specified depth.

                Syntax :=
                        flat()
                        flat(depth)

                Example :=
                        let arr1 = [0, 1, 2, [3, 4]];
                        console.log(arr1.flat());               //  [ 0, 1, 2, 3, 4 ]
                        let arr2 = [0, 1, 2, [[[3, 4]]]];
                        console.log(arr2.flat(2));              //  [ 0, 1, 2, [ 3, 4 ] ]


*/