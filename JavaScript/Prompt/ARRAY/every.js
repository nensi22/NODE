/*

    <--> Array.prototype.every()
                The every() method tests whether all elements in the array pass the test implemented by the provided function. 
                It returns a Boolean value.

                Syntax :=
                        // Arrow function
                        every((element) => {  …  })
                        every((element, index) => {  …  })
                        every((element, index, array) => {  …  })

                        // Callback function
                        every(callbackFn)
                        every(callbackFn, thisArg)

                        // Inline callback function
                        every(function (element) {  …/ })
                        every(function (element, index) {  …  })
                        every(function (element, index, array) {  …  })
                        every(function (element, index, array) {  …  }, thisArg)

                Example :=
                        let arr = (currentValue) => currentValue < 40;
                        let arr1 = [1, 30, 39, 29, 10, 13];
                        console.log(arr1.every(arr));                           //    true

                        let arr = (currentValue) => currentValue < 35;
                        let arr1 = [1, 30, 39, 29, 10, 13];
                        console.log(arrxx1.every(arr));                         //    false


*/