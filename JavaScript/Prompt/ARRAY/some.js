/*

    <--> Array.prototype.some()
                The some() method tests whether at least one element in the array passes the test implemented by 
                the provided function. It returns true if, in the array, it finds an element for which the 
                provided function returns true; otherwise it returns false. It doesn't modify the array.

                Syntax :=
                        // Arrow function
                        some((element) => { / … / })
                        some((element, index) => { / … / })
                        some((element, index, array) => { / … / })

                        // Callback function
                        some(callbackFn)
                        some(callbackFn, thisArg)

                        // Inline callback function
                        some(function (element) { / … / })
                        some(function (element, index) { / … / })
                        some(function (element, index, array) { / … / })
                        some(function (element, index, array) { / … / }, thisArg)

                Example :=
                        let arr=[10,11,12,13,14,15,16,17,18,19,20];
                        let chek=(element)=>element>19;
                        console.log(arr.some(chek));                    //      true





*/