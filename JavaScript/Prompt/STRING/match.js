/*

    <--> String.prototype.match()
            The match() method retrieves the result of matching a string against a regular expression.

            Syntax  :=
                match(regexp)

            Example :=
                let paragraph = 'ABCDEFGabcdefg';
                let regex = /[A-C]/gi;
                let found = paragraph.match(regex);
                console.log(found);                                     //          [ 'A', 'B', 'C', 'a', 'b', 'c' ]


*/