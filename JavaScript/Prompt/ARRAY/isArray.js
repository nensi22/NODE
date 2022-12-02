/*         

   <--> Array.prototype.reduce()
            The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
             in order, passing in the return value from the calculation on the preceding element. 
             The final result of running the reducer across all elements of the array is a single value.

        Syntax :=
                reduce((accumulator, currentValue) => { / … / })
                reduce((accumulator, currentValue, currentIndex) => { / … / })
                reduce((accumulator, currentValue, currentIndex, array) => { / … / })

        Example :=
                

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
     

   <--> Array.prototype.reverse()
            The reverse() method reverses an array in place and returns the reference to the same array, 
            the first array element now becoming the last, and the last array element becoming the first. 
            In other words, elements order in the array will be turned towards the direction opposite to 
            that previously stated.

        Syntax :=
                reverse()

        Example :=
                let array = ['one', 'two', 'three'];
                console.log('reversed:',array.reverse());               //      reversed: [ 'three', 'two', 'one' ]       
            

   <--> Array.prototype.shift()
            The shift() method removes the first element from an array and returns that removed element. 
            This method changes the length of the array.

        Syntax :=
                shift()

        Example :=
                let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18];
                arr.shift();
                arr.shift();
                arr.shift();
                console.log(arr);                       //              [ 13, 14, 15, 16, 17, 18 ]
                
            
   <--> Array.prototype.slice()
            The slice() method returns a shallow copy of a portion of an array into a new array object selected 
            from start to end (end not included) where start and end represent the index of items in that array.
             The original array will not be modified.

        Syntax :=
                slice()
                slice(start)
                slice(start, end)

        Example :=
                let arr=[10,11,12,13,14,15,16,17,18,19,20];
                arr.slice(2);
                console.log(arr.slice(3));                      //      [ 13, 14, 15, 16, 17, 18, 19, 20 ]      
                console.log(arr.slice(3,9));                    //      [ 13, 14, 15, 16, 17, 18 ]

                console.log(arr.slice(-3,2));                   //      []  
                console.log(arr.slice(-3,-5));                  //      []     
                console.log(arr.slice(-5,-3));                  //      [ 16, 17 ]

                        
   <--> Array.prototype.some()
            The some() method tests whether at least one element in the array passes the test implemented by 
            the provided function. It returns true if, in the array, it finds an element for which the 
            provided function returns true; otherwise it returns false. It doesn't modify the array.

        Syntax :=
                // Arrow function
                some((element) => { / … / })
                some((element, index) => { / … / })
                some((element, index, array) => { / … / })

                // Callback function
                some(callbackFn)
                some(callbackFn, thisArg)

                // Inline callback function
                some(function (element) { / … / })
                some(function (element, index) { / … / })
                some(function (element, index, array) { / … / })
                some(function (element, index, array) { / … / }, thisArg)

        Example :=
                let arr=[10,11,12,13,14,15,16,17,18,19,20];
                let chek=(element)=>element>19;
                console.log(arr.some(chek));                    //      true


   <--> Array.prototype.sort()
            The sort() method sorts the elements of an array in place and returns the reference to the 
            same array, now sorted. The default sort order is ascending, built upon converting the elements 
            into strings, then comparing their sequences of UTF-16 code units values.

        Syntax :=
                // Functionless
                sort()

                // Arrow function
                sort((a, b) => { / … / } )

                // Compare function
                sort(compareFn)

                // Inline compare function
                sort(function compareFn(a, b) { / … / })

        Example :=
                let months = ['March', 'Jan', 'Feb', 'Dec'];
                console.log(months.sort());                     //      [ 'Dec', 'Feb', 'Jan', 'March' ]
                
                let array = [34,67,90,76];
                console.log(array.sort());                      //      [ 34, 67, 76, 90 ]s
            
   <--> Array.prototype.splice()
            The splice() method changes the contents of an array by removing or replacing existing elements 
            and/or adding new elements in place. To access part of an array without modifying it, see slice().

        Syntax :=
                splice(start)
                splice(start, deleteCount)
                splice(start, deleteCount, item1)
                splice(start, deleteCount, item1, item2, itemN)

        Example :=
                let arr=[1,2,3,4,5,6,7,8];
                console.log(arr.splice(1,3));                   //      [ 2, 3, 4 ]

                let arr=[1,2,3,4,5,6,7,8];
                arr.splice(5,2,88,99);
                console.log(arr);                               //      [ 1, 2, 3, 4, 5, 88, 99, 8 ]
            
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
        
            
   <--> Array.prototype.toString()
            The toString() method returns a string representing the specified array and its elements.

        Syntax := 
                toString()

        Example :=
                let array = [1, 2, 'a', '1a'];
                console.log(array.toString());             // 1,2,a,1a
    
            
   <--> Array.prototype.unshift()
            The unshift() method adds one or more elements to the beginning of an array and returns 
            the new length of the array.

        Syntax :=
                unshift(element0)
                unshift(element0, element1)
                unshift(element0, element1, / … ,/ elementN)

        Example :=
                let array = [1, 2, 3];
                array.unshift(4, 5)  
                console.log(array);                     //      [ 4, 5, 1, 2, 3 ]
                        
            
   <--> Array.prototype.values()
            The values() method returns a new array iterator object that iterates the value of each 
            index in the array.

        Syntax :=
                values()

        Example :=
                let array = ['a', 'b', 'c'];
                let iterator = array.values();
                for (let value of iterator) {
                console.log(value);                     // a
                }                                       // b
                                                        // c
            

  */