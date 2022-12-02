/*

    <--> Array.prototype.slice()
                The slice() method returns a shallow copy of a portion of an array into a new array object selected 
                from start to end (end not included) where start and end represent the index of items in that array.
                The original array will not be modified.

                Syntax :=
                        slice()
                        slice(start)
                        slice(start, end)

                Example :=
                        let arr=[10,11,12,13,14,15,16,17,18,19,20];
                        arr.slice(2);
                        console.log(arr.slice(3));                      //      [ 13, 14, 15, 16, 17, 18, 19, 20 ]      
                        console.log(arr.slice(3,9));                    //      [ 13, 14, 15, 16, 17, 18 ]

                        console.log(arr.slice(-3,2));                   //      []  
                        console.log(arr.slice(-3,-5));                  //      []     
                        console.log(arr.slice(-5,-3));                  //      [ 16, 17 ]

                        


*/