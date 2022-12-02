/*

    <--> String.prototype.slice()
                The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

                Syntax :=
                        slice(indexStart)
                        slice(indexStart, indexEnd

                Example :=
                        let str = 'The quick brown fox jumps over the lazy dog.';
                        console.log(str.slice(25));                                             //      over the lazy dog
                        console.log(str.slice(4, 19));                                          //      quick brown fox
                        console.log(str.slice(-4));                                             //      dog.
                        console.log(str.slice(-9, -5));                                         //      lazy

*/