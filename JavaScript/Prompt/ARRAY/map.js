/*

   <--> Array.prototype.map()
                The map() method creates a new array populated with the results of calling a provided function 
                on every element in the calling array.

                Syntax :=
                        // Arrow function
                        map((element) => { / … / })
                        map((element, index) => { / … / })
                        map((element, index, array) => { / … / })

                        // Callback function
                        map(callbackFn)
                        map(callbackFn, thisArg)

                        // Inline callback function
                        map(function (element) { / … / })
                        map(function (element, index) { / … / })
                        map(function (element, index, array) { / … / })
                        map(function (element, index, array) { / … / }, thisArg)

                Example :=
                        const numbers = [1, 2, 3, 4];
                        const doubled = numbers.map(item => item * 2);
                        console.log(doubled)                                    // [ 2, 4, 6, 8 ]
    


*/