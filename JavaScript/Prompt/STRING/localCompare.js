/*

    <--> String.prototype.localeCompare()
                The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same 
                as the given string in sort order. In implementations with Intl.Collator API support, this method simply calls Intl.Collator.                    
            
            Syntax  :=
                    localeCompare(compareString)
                    localeCompare(compareString, locales)
                    localeCompare(compareString, locales, options)

            Example :=
                    let str1 = 'reverse'; // with accents, lowercase
                    let str2 = 'RESERVE'; // no accents, uppercase
                    console.log(str1.localeCompare(str2));                        //      1


*/