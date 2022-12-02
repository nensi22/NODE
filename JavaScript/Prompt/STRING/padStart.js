/*

    <--> String.prototype.padStart()
                The padStart() method pads the current string with another string (multiple times, if needed) until the resulting 
                string reaches the given length. The padding is applied from the start of the current string.

                Syntax  :=
                        padStart(targetLength)
                        padStart(targetLength, padString)

                Example :=
                        let fullNum = '123456789';
                        let lastDigits = fullNum.slice(-4);
                        let maskedNum = lastDigits.padStart(fullNum.length, '*');
                        console.log(maskedNum);                                                  //          *****6789


*/