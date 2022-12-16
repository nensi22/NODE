/*

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

                        
                        console.log(
                                [1, 2, 3, 4, 5].filter((element) => {
                                        return element >= 3;
                                })
                        );                                              //[ 3, 4, 5 ]


                        const numbers = [1, 2, 3, 4];
                        const evens = numbers.filter(item => item % 2 === 0);
                        console.log(evens);                                     //      [ 2, 4 ]


                        const students = [
                        { name: 'Quincy', grade: 96 },
                        { name: 'Jason', grade: 84 },
                        { name: 'Alexis', grade: 100 },
                        { name: 'Sam', grade: 65 },
                        { name: 'Katie', grade: 90 }
                        ];
                        const studentGrades = students.filter(student => student.grade >= 90);
                        console.log( studentGrades); 

                                                                        //      [
                                                                                     { name: 'Quincy', grade: 96 },
                                                                                     { name: 'Alexis', grade: 100 },
                                                                                     { name: 'Katie', grade: 90 }
                                                                        //      ]


                        console.log(
                                [1, 2, 3, 4, 5].map((element, index) => {
                                        return element * 100;
                                }).filter((element, index) => {
                                        return element >= 300;
                                })
                        );                                              //      [ 300, 400, 500 ]


                        console.log(
                                [1, 2, 3, 4, 5].reduce((firstElement, nextElement) => {
                                        console.log(firstElement +" - " + nextElement)
                                        return firstElement + nextElement;
                                },10)
                        );                                                      //        10 - 1
                                                                                //        11 - 2
                                                                                //        13 - 3
                                                                                //        16 - 4
                                                                                //        20 - 5
                                                                                //        25


*/