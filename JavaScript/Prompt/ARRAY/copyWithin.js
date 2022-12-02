/*

    <--> Array.prototype.copyWithin()
                The copyWithin() method shallow copies part of an array to another location in the same array and returns 
                it without modifying its length.

                Syntax :=
                        copyWithin(target)
                        
                Example :=
                        let array1 = [1,2,3,4,5,6,7,8];
                        
                        console.log(array1.copyWithin(2,4,6));             //  [ 1, 2, 5, 6, 5, 6, 7, 8 ]     
                        console.log(array1.copyWithin(1, 3));              //  [ 1, 6, 5, 6, 7, 8, 7, 8 ]


*/