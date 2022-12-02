/*

    <--> Array.prototype.toLocaleString()
                The toLocaleString() method returns a string representing the elements of the array. 
                The elements are converted to Strings using their toLocaleString methods and these Strings 
                are separated by a locale-specific String (such as a comma ",").

                Syntax :=
                        toLocaleString()
                        toLocaleString(locales)
                        toLocaleString(locales, options)

                Example :=
                        let array = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
                        let localeStr = array.toLocaleString('en', { timeZone: 'UTC' });
                        console.log(localeStr);                                    //     1,a,12/21/1997, 2:12:00 PM
        
            

*/