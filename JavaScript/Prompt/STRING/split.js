/*

    <--> String.prototype.split()
                The split() method takes a pattern and divides a String into an ordered list of substrings by searching for 
                the pattern, puts these substrings into an array, and returns the array.

                Syntax :=
                        split()
                        split(separator)
                        split(separator, limit)

                Example :=
                        let str = 'The quick brown fox jumps over the lazy dog.';
                        let  words = str.split(' ');
                        console.log(words[3]);                  // fox
                        
                        let  chars = str.split('');
                        console.log(chars[8]);                  //  k
                        
                        let  strCopy = str.split();
                        console.log(strCopy);                   // [ 'The quick brown fox jumps over the lazy dog.' ]

    */     