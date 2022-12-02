/*

    <--> Array.prototype.find()
                The find() method returns the first element in the provided array that satisfies the provided testing 
                function. If no values satisfy the testing function, undefined is returned.

                Syntax :=
                        // Arrow function
                        find((element) => {  …  })
                        find((element, index) => {  …  })
                        find((element, index, array) => {  …  })

                        // Callback function
                        find(callbackFn)
                        find(callbackFn, thisArg)

                        // Inline callback function
                        find(function (element) {  …  })
                        find(function (element, index) {  …  })
                        find(function (element, index, array) {  …  })
                        find(function (element, index, array) {  …  }, thisArg)

                Example :=
                        let array1 = [5, 12, 8, 130, 44];
                        let found = array1.find(element => element > 10);
                        console.log(found);                                             //  12


*/