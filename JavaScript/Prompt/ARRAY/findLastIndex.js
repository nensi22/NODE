/*
 
    <--> Array.prototype.findLastIndex()
                The findLastIndex() method iterates the array in reverse order and returns the index of the first 
                element that satisfies the provided testing function. If no elements satisfy the testing 
                function, -1 is returned.

                Syntax :=
                        // Arrow function
                        findLastIndex((element) => { / … / })
                        findLastIndex((element, index) => { / … / })
                        findLastIndex((element, index, array) => { / … / })

                        // Callback function
                        findLastIndex(callbackFn)
                        findLastIndex(callbackFn, thisArg)

                        // Inline callback function
                        findLastIndex(function (element) { / … / })
                        findLastIndex(function (element, index) { / … / })
                        findLastIndex(function (element, index, array) { / … / })
                        findLastIndex(function (element, index, array) { / … / }, thisArg)

                Example :=
                        let array1 = [5, 12, 50, 130, 44];
                        let Number = (element) => element > 45;
                        console.log(array1.findLastIndex(Number));               // 3




 */