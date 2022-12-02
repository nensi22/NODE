/*

    <--> Array.prototype.reduceRight()
                The reduceRight() method applies a function against an accumulator and each value of the array 
                (from right-to-left) to reduce it to a single value.

                Syntax :=
                        // Arrow function
                        reduceRight((accumulator, currentValue) => { / … / })
                        reduceRight((accumulator, currentValue, index) => { / … / })
                        reduceRight((accumulator, currentValue, index, array) => { / … / })
                        reduceRight((accumulator, currentValue, index, array) => { / … / }, initialValue)

                        // Callback function
                        reduceRight(callbackFn)
                        reduceRight(callbackFn, initialValue)

                        // Callback reducer function
                        reduceRight(function (accumulator, currentValue) { / … / })
                        reduceRight(function (accumulator, currentValue, index) { / … / })
                        reduceRight(function (accumulator, currentValue, index, array) { / … / })
                        reduceRight(function (accumulator, currentValue, index, array) { / … / }, initialValue)

                Example :=
                        let array = [[0, 1], [2, 3], [4, 5]];
                        let result = array.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
                        console.log(result);                                // [ 4, 5, 2, 3, 0, 1 ]
        



*/