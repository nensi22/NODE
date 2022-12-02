/*         
   <--> Array.prototype[@@iterator]()
            The @@iterator method of an Array object implements the iterable protocol and allows arrays to be consumed 
            by most syntaxes expecting iterables, such as the spread syntax and for...of loops. 
            It returns an iterator that yields the value of each index in the array.

        Syntax :=
                array[Symbol.iterator]()

        Example :=
                let arr = ["a", "b", "c", "d", "e"];
                let arrIter = arr[Symbol.iterator]();
                console.log(arrIter.next().value);                      // a
                console.log(arrIter.next().value);                      // b
                console.log(arrIter.next().value);                      // c
                console.log(arrIter.next().value);                      // d
                console.log(arrIter.next().value);                      // e


   <--> Array.prototype.at()
            The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. 
            Negative integers count back from the last item in the array.

        Syntax :=
                at(index)

        Example :=
                let array = [5, 12, 8, 130, 44];
                console.log(array.at(2));                      //      8

   <--> Array.prototype.concat()
            The concat() method is used to merge two or more arrays. This method does not change the existing arrays, 
            but instead returns a new array.

        Syntax :=
                concat()
                concat(value0)
                concat(value0, value1)
                concat(value0, value1, ...... , valueN)

        Example :=
                let array1 = [11,22,33,44];
                let array2 = [10,20,30,40];
                console.log(array1.concat(array2));                   // [ 11, 22, 33, 44, 10, 20, 30, 40 ]

   <--> Array.prototype.copyWithin()
            The copyWithin() method shallow copies part of an array to another location in the same array and returns 
            it without modifying its length.

        Syntax :=
                copyWithin(target)
                
        Example :=
                let array1 = [1,2,3,4,5,6,7,8];
                
                console.log(array1.copyWithin(2,4,6));             //  [ 1, 2, 5, 6, 5, 6, 7, 8 ]     
                console.log(array1.copyWithin(1, 3));              //  [ 1, 6, 5, 6, 7, 8, 7, 8 ]


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

    
   <--> Array.prototype.every()
            The every() method tests whether all elements in the array pass the test implemented by the provided function. 
            It returns a Boolean value.

        Syntax :=
                // Arrow function
                every((element) => {  …  })
                every((element, index) => {  …  })
                every((element, index, array) => {  …  })

                // Callback function
                every(callbackFn)
                every(callbackFn, thisArg)

                // Inline callback function
                every(function (element) {  …/ })
                every(function (element, index) {  …  })
                every(function (element, index, array) {  …  })
                every(function (element, index, array) {  …  }, thisArg)

        Example :=
                let arr = (currentValue) => currentValue < 40;
                let arr1 = [1, 30, 39, 29, 10, 13];
                console.log(arr1.every(arr));                    //    true

                let arr = (currentValue) => currentValue < 35;
                let arr1 = [1, 30, 39, 29, 10, 13];
                console.log(arrxx1.every(arr));                    //    false


   <--> Array.prototype.fill()
            The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end 
            index (default array.length). It returns the modified array.

        Syntax :=
                fill(value)
                fill(value, start)
                fill(value, start, end)

        Example :=
                let array1 = [1, 2, 3, 4];
                
                console.log(array1.fill(0, 2, 4));              // [ 1, 2, 0, 0 ]
                console.log(array1.fill(5, 1));                 // [ 1, 5, 5, 5 ]
                console.log(array1.fill(6));                    // [ 6, 6, 6, 6 ]


   <--> Array.prototype.filter()
            The filter() method creates a shallow copy of a portion of a given array, filtered down to just 
            the elements from the given array that pass the test implemented by the provided function.

        Syntax :=
                // Arrow function
                filter((element) => {  …  })
                filter((element, index) => {  …/ })
                filter((element, index, array) => {  …  })

                // Callback function
                filter(callbackFn)
                filter(callbackFn, thisArg)

                // Inline callback function
                filter(function (element) {  …  })
                filter(function (element, index) {  …  })
                filter(function (element, index, array) {  …  })
                filter(function (element, index, array) {  …  }, thisArg)

        Example :=
                let array = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
                let result = array.filter(array => array.length > 6);
                console.log(result);                        // [ 'exuberant', 'destruction', 'present' ]


   <--> Array.prototype.find()
            The find() method returns the first element in the provided array that satisfies the provided testing 
            function. If no values satisfy the testing function, undefined is returned.

        Syntax :=
                // Arrow function
                find((element) => {  …  })
                find((element, index) => {  …  })
                find((element, index, array) => {  …  })

                // Callback function
                find(callbackFn)
                find(callbackFn, thisArg)

                // Inline callback function
                find(function (element) {  …  })
                find(function (element, index) {  …  })
                find(function (element, index, array) {  …  })
                find(function (element, index, array) {  …  }, thisArg)

        Example :=
                let array1 = [5, 12, 8, 130, 44];
                let found = array1.find(element => element > 10);
                console.log(found);                                             //  12


   <--> Array.prototype.findIndex()
            The findIndex() method returns the index of the first element in an array that satisfies the provided testing 
            function. If no elements satisfy the testing function, -1 is returned. 
            
        Syntax :=
                // Arrow function
                findIndex((element) => {  …  })
                findIndex((element, index) => {  …  })
                findIndex((element, index, array) => {  …  })

                // Callback function
                findIndex(callbackFn)
                findIndex(callbackFn, thisArg)

                // Inline callback function
                findIndex(function (element) {  …  })
                findIndex(function (element, index) {  …  })
                findIndex(function (element, index, array) {  …  })
                findIndex(function (element, index, array) {  …  }, thisArg)

        Example :=
                let array1 = [5, 12, 8, 130, 44];
                let Number = (element) => element > 13;
                console.log(array1.findIndex(Number));               // 3


   <--> Array.prototype.findLast()
            The findLast() method iterates the array in reverse order and returns the value of the first element 
            that satisfies the provided testing function. If no elements satisfy the testing function, 
            undefined is returned.
            
        Syntax :=
                // Arrow function
                findLast((element) => { / … / })
                findLast((element, index) => { / … / })
                findLast((element, index, array) => { / …// })

                // Callback function
                findLast(callbackFn)
                findLast(callbackFn, thisArg)

                // Inline callback function
                findLast(function (element) { / … / })
                findLast(function (element, index) { / … / })
                findLast(function (element, index, array) { / … / })
                findLast(function (element, index, array) { / … / }, thisArg)

        Example :=
                let array1 = [5, 12, 50, 130, 44];
                let found = array1.findLast((element) => element > 45);
                console.log(found);                                             //  130 
    

   <--> Array.prototype.findLastIndex()
            The findLastIndex() method iterates the array in reverse order and returns the index of the first 
            element that satisfies the provided testing function. If no elements satisfy the testing 
            function, -1 is returned.

        Syntax :=
                // Arrow function
                findLastIndex((element) => { / … / })
                findLastIndex((element, index) => { / … / })
                findLastIndex((element, index, array) => { / … / })

                // Callback function
                findLastIndex(callbackFn)
                findLastIndex(callbackFn, thisArg)

                // Inline callback function
                findLastIndex(function (element) { / … / })
                findLastIndex(function (element, index) { / … / })
                findLastIndex(function (element, index, array) { / … / })
                findLastIndex(function (element, index, array) { / … / }, thisArg)

        Example :=
                let array1 = [5, 12, 50, 130, 44];
                let Number = (element) => element > 45;
                console.log(array1.findLastIndex(Number));               // 3


   <--> Array.prototype.flat()
            The flat() method creates a new array with all sub-array elements concatenated into it 
            recursively up to the specified depth.

        Syntax :=
                flat()
                flat(depth)

        Example :=
                let arr1 = [0, 1, 2, [3, 4]];
                console.log(arr1.flat());               //  [ 0, 1, 2, 3, 4 ]
                let arr2 = [0, 1, 2, [[[3, 4]]]];
                console.log(arr2.flat(2));              //  [ 0, 1, 2, [ 3, 4 ] ]


   <--> Array.prototype.flatMap()
            The flatMap() method returns a new array formed by applying a given callback function to each element
             of the array, and then flattening the result by one level. It is identical to a map() followed by 
             a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two 
             methods separately.

        Syntax :=
                // Arrow function
                flatMap((element) => { / … / })
                flatMap((element, index) => { / … / })
                flatMap((element, index, array) => { / … / })

                // Callback function
                flatMap(callbackFn)
                flatMap(callbackFn, thisArg)

                // Inline callback function
                flatMap(function (element) { / … / })
                flatMap(function (element, index) { / … / })
                flatMap(function (element, index, array) { / … / })
                flatMap(function (element, index, array) { / … / }, thisArg)

        Example :=
                let arr1 = [1, 2, [3], [4, 5], 6, []];
                let flattened = arr1.flatMap(num => num);
                console.log(flattened);
                

   <--> Array.prototype.forEach()
            The forEach() method executes a provided function once for each array element.

        Syntax :=
                // Arrow function
                forEach((element) => { / … / })
                forEach((element, index) => { / … / })
                forEach((element, index, array) => { / … / })

                // Callback function
                forEach(callbackFn)
                forEach(callbackFn, thisArg)

                // Inline callback function
                forEach(function (element) { / … / })
                forEach(function (element, index) { / … / })
                forEach(function (element, index, array) { / … / })
                forEach(function (element, index, array) { / … / }, thisArg)

        Example :=
                let array = ['a', 'b', 'c'];
                array.forEach(element => console.log(element));        // a
                                                                        // b
                                                                        // c


   <--> Array.from()
            The Array.from() static method creates a new, shallow-copied Array instance from an iterable 
            or array-like object.

        Syntax :=
                // Arrow function
                Array.from(arrayLike, (element) => { / … / })
                Array.from(arrayLike, (element, index) => { / … / })

                // Mapping function
                Array.from(arrayLike, mapFn)
                Array.from(arrayLike, mapFn, thisArg)

                // Inline mapping function
                Array.from(arrayLike, function (element) { / … / })
                Array.from(arrayLike, function (element, index) { / … / })
                Array.from(arrayLike, function (element) { / … / }, thisArg)
                Array.from(arrayLike, function (element, index) { / … / }, thisArg)

        Example :=
                console.log(Array.from('foo'));                         // [ 'f', 'o', 'o' ]    
                console.log(Array.from([1, 2, 3], x => x + x));         // [ 2, 4, 6 ]


   <--> Array.prototype.includes()
            The includes() method determines whether an array includes a certain value among its entries, 
            returning true or false as appropriate.

        Syntax :=
                includes(searchElement)
                includes(searchElement, fromIndex)

        Example :=
                let array = [1, 2, 3];
                console.log(array.includes(2));            // true
                let pets = ['cat', 'dog', 'bat'];
                console.log(pets.includes('cat'));          // true
                console.log(pets.includes('at'));           // false


   <--> Array.prototype.indexOf()
            The indexOf() method returns the first index at which a given element can be found in the array,
             or -1 if it is not present.

        Syntax :=
                indexOf(searchElement)
                indexOf(searchElement, fromIndex)   

        Example :=
                let arr = ['ant', 'bison', 'camel', 'duck', 'bison'];
                console.log(arr.indexOf('bison'));           // 1
                console.log(arr.indexOf('bison', 2));        // 4
                console.log(arr.indexOf('giraffe'));         // -1


   <--> Array.isArray()
            The Array.isArray() static method determines whether the passed value is an Array.

        Syntax :=
                Array.isArray(value)

    
   <--> Array.prototype.join()
            The join() method creates and returns a new string by concatenating all of the elements in an 
            array (or an array-like object), separated by commas or a specified separator string. 
            If the array has only one item, then that item will be returned without using the separator.

        Syntax :=
                join()
                join(separator) 

        Example :=
                let array=[1,2,3,4];
                console.log(array.join());                      //     "1,2,3,4"
                console.log(array.join(''));                    //     "1234"
                console.log(array.join('-'));                   //     "1234"


   <--> Array.prototype.keys()
            The keys() method returns a new Array Iterator object that contains the keys for each index in 
            the array.

        Syntax :=
                keys()

        Example :=
                let array1 = ['a', 'b', 'c'];
                let iterator = array1.keys();
                for (const key of iterator) {
                console.log(key);                       // 0
                }                                       // 1
                                                        // 2


   <--> Array.prototype.lastIndexOf()
            The lastIndexOf() method returns the last index at which a given element can be found in the array,
             or -1 if it is not present. The array is searched backwards, starting at fromIndex.

        Syntax :=
                lastIndexOf(searchElement)
                lastIndexOf(searchElement, fromIndex)  
                
        Example :=
                let arr = ['Dodo', 'Tiger', 'Penguin', 'lion'];
                console.log(arr.lastIndexOf('Dodo'));               //  0
                console.log(arr.lastIndexOf('Tiger'));              //  1
    

   <--> Array.prototype.map()
            The map() method creates a new array populated with the results of calling a provided function 
            on every element in the calling array.

        Syntax :=
                // Arrow function
                map((element) => { / … / })
                map((element, index) => { / … / })
                map((element, index, array) => { / … / })

                // Callback function
                map(callbackFn)
                map(callbackFn, thisArg)

                // Inline callback function
                map(function (element) { / … / })
                map(function (element, index) { / … / })
                map(function (element, index, array) { / … / })
                map(function (element, index, array) { / … / }, thisArg)

        Example :=
                let array1 = [1, 4, 9, 16];
                let map1 = array1.map(x => x * 2);
                console.log(map1);                      // [ 2, 8, 18, 32 ]
    
            
   <--> Array.of()
            The Array.of() method creates a new Array instance from a variable number of arguments, 
            regardless of number or type of the arguments.
        
        Syntax :=
                Array.of(element0)
                Array.of(element0, element1)
                Array.of(element0, element1, / … ,/ elementN)

        Example :=
    
    
   <--> Array.prototype.pop()
            The pop() method removes the last element from an array and returns that element. 
            This method changes the length of the array.

        Syntax :=
                pop()

        Example :=
                let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18];
                arr.pop();
                arr.pop();
                arr.pop();
                console.log(arr);                               //   [ 10, 11, 12, 13, 14, 15 ]
        
            
   <--> Array.prototype.push() 
            The push() method adds one or more elements to the end of an array and returns the new length of
             the array.

        Syntax :=
                push(element0)
                push(element0, element1)
                push(element0, element1, / … ,/ elementN)

        Example :=
                let arr = [10, 11, 12, 13, 14, 15];
                arr.push(88);
                arr.push(100);
                console.log(arr);                               //      [ 10, 11, 12, 13, 14, 15, 88, 100 ]

            
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