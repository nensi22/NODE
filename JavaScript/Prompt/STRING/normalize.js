/*

    <--> String.prototype.normalize()
            The normalize() method returns the Unicode Normalization Form of the string.

            Syntax  :=
                    normalize()
                    normalize(form)

            Example :=
                    let name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
                    let name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
                    console.log(`${name1}, ${name2}`);                                      //          Amélie, Amélie  
                    console.log(name1 === name2);                                           //        false
                    console.log(name1.length === name2.length);                             //        false
                    
                    let name1NFC = name1.normalize('NFC');              
                    let name2NFC = name2.normalize('NFC');
                    console.log(`${name1NFC}, ${name2NFC}`);                                //          Amélie, Amélie  
                    console.log(name1NFC === name2NFC);                                     //         true
                    console.log(name1NFC.length === name2NFC.length);                       //         true


*/