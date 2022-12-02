/*

    <--> Array.prototype.entries()
                The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

                Syntax :=
                        entries()

                Example :=
                        let array1 = ['a', 'b', 'c'];
                        let iterator1 = array1.entries();
                        console.log(iterator1.next().value);                // [ 0, 'a' ]
                        console.log(iterator1.next().value);                // [ 1, 'b' ]
                        console.log(iterator1.next().value);                // [ 2, 'c' ]
                        console.log(iterator1.next().value);                // undefined


*/