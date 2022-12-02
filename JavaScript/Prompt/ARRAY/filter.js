/*

    <--> Array.prototype.filter()
                The filter() method creates a shallow copy of a portion of a given array, filtered down to just 
                the elements from the given array that pass the test implemented by the provided function.

                Syntax :=
                        // Arrow function
                        filter((element) => {  …  })
                        filter((element, index) => {  …/ })
                        filter((element, index, array) => {  …  })

                        // Callback function
                        filter(callbackFn)
                        filter(callbackFn, thisArg)

                        // Inline callback function
                        filter(function (element) {  …  })
                        filter(function (element, index) {  …  })
                        filter(function (element, index, array) {  …  })
                        filter(function (element, index, array) {  …  }, thisArg)

                Example :=
                        let array = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
                        let result = array.filter(array => array.length > 6);
                        console.log(result);                        // [ 'exuberant', 'destruction', 'present' ]


*/