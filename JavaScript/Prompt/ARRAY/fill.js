/*

    <--> Array.prototype.fill()
                The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end 
                index (default array.length). It returns the modified array.

                Syntax :=
                        fill(value)
                        fill(value, start)
                        fill(value, start, end)

                Example :=
                        let array1 = [1, 2, 3, 4];
                        
                        console.log(array1.fill(0, 2, 4));              // [ 1, 2, 0, 0 ]
                        console.log(array1.fill(5, 1));                 // [ 1, 5, 5, 5 ]
                        console.log(array1.fill(6));                    // [ 6, 6, 6, 6 ]


*/