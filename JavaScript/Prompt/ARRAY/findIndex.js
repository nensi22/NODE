/*

    <--> Array.prototype.findIndex()
                The findIndex() method returns the index of the first element in an array that satisfies the provided testing 
                function. If no elements satisfy the testing function, -1 is returned. 
                
                Syntax :=
                        // Arrow function
                        findIndex((element) => {  …  })
                        findIndex((element, index) => {  …  })
                        findIndex((element, index, array) => {  …  })

                        // Callback function
                        findIndex(callbackFn)
                        findIndex(callbackFn, thisArg)

                        // Inline callback function
                        findIndex(function (element) {  …  })
                        findIndex(function (element, index) {  …  })
                        findIndex(function (element, index, array) {  …  })
                        findIndex(function (element, index, array) {  …  }, thisArg)

                Example :=
                        let array1 = [5, 12, 8, 130, 44];
                        let Number = (element) => element > 13;
                        console.log(array1.findIndex(Number));               // 3


*/