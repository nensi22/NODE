/*

    <--> Array.prototype.sort()
                The sort() method sorts the elements of an array in place and returns the reference to the 
                same array, now sorted. The default sort order is ascending, built upon converting the elements 
                into strings, then comparing their sequences of UTF-16 code units values.

                Syntax :=
                        // Functionless
                        sort()

                        // Arrow function
                        sort((a, b) => { / … / } )

                        // Compare function
                        sort(compareFn)

                        // Inline compare function
                        sort(function compareFn(a, b) { / … / })

                Example :=
                        let months = ['March', 'Jan', 'Feb', 'Dec'];
                        console.log(months.sort());                     //      [ 'Dec', 'Feb', 'Jan', 'March' ]
                        
                        let array = [34,67,90,76];
                        console.log(array.sort());                      //      [ 34, 67, 76, 90 ]
          


*/