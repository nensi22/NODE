/*

    <--> Array.prototype.findLast()
                The findLast() method iterates the array in reverse order and returns the value of the first element 
                that satisfies the provided testing function. If no elements satisfy the testing function, 
                undefined is returned.
                
                Syntax :=
                        // Arrow function
                        findLast((element) => { / … / })
                        findLast((element, index) => { / … / })
                        findLast((element, index, array) => { / …// })

                        // Callback function
                        findLast(callbackFn)
                        findLast(callbackFn, thisArg)

                        // Inline callback function
                        findLast(function (element) { / … / })
                        findLast(function (element, index) { / … / })
                        findLast(function (element, index, array) { / … / })
                        findLast(function (element, index, array) { / … / }, thisArg)

                Example :=
                        let array1 = [5, 12, 50, 130, 44];
                        let found = array1.findLast((element) => element > 45);
                        console.log(found);                                             //  130 


*/