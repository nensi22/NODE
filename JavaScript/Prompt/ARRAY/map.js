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
                        let array1 = [1, 4, 9, 16];
                        let map1 = array1.map(x => x * 2);
                        console.log(map1);                      // [ 2, 8, 18, 32 ]
    


*/