// DATE:-19/11/2022

// Array

// The Array object, as with arrays in other programming languages, 
// enables storing a collection of multiple items under a single variable name, 
// and has members for performing common array operations.

//  Description 

// => In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

    // --> JavaScript arrays are resizable and can contain a mix of different data types.
    //     (When those characteristics are undesirable, use typed arrays instead.)

    // --> JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes,
    //     but must be accessed using nonnegative integers (or their respective string form) as indexes.

    // --> JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and
    //     the last element is at the value of the array's length property minus 1.

    // --> JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects
    //     create shallow copies, rather than deep copies).


//  =>  Relationship between length and numerical properties
       
//     --> A JavaScript array's length property and numerical properties are connected.
       
//     --> Several of the built-in array methods (e.g., join(), slice(), indexOf(), etc.) take into account the value of an array's length property when they're called.
       
//     --> Other methods (e.g., push(), splice(), etc.) also result in updates to an array's length property.


// let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// arr.length = 100;
// console.log(typeof arr);                   //          [ object ]

// console.log(arr);                          //          [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
                    
// console.log(arr[0]);                       //          [ 10 ]

// console.log(arr[5]);                       //          [ 15 ]

// console.log(arr["10"]);                    //          [ undefined ]

// arr[50] = 550;
// arr[49] = undefined;
// arr[3.1] = 60;
// console.log(arr);
                                                /*          [ 10, 11, 12, 13, 14, 
                                                                15, 16, 17, 18, 19. 
                                                                <39 empty items>,
                                                                undefined, 550,
                                                                '3.1': 60
                                                             ]                           */


//The length property of an Array object represents the number of elements in that array

// let arr = ["ten", 11, "twelve", 13, 14, "15", 16, "17"];
// console.log(arr);                           //         ["ten", 11, "twelve", 13, 14, "15", 16, "17"] 

// console.log(arr.length);                    //         [ 8 ]

// arr.length = 100;
// console.log(arr);                           //         ["ten", 11, "twelve", 13, 14, "15", 16, "17"] 

// console.log(arr.length);                    //         [ 100 ]

// arr[9] = undefined;
// arr[5] = undefined;
// arr[5] = 20;
// arr[3.1] = 3.1;
// arr["A"] = "a";
// console.log(arr);                                
                                               /*          [
                                                                'ten',          11,
                                                                'twelve',       13,
                                                                14,             20,
                                                                16,             '17',
                                                                <1 empty item>, undefined,
                                                                '3.1': 3.1,     A: 'a'
                                                            ]                                */

// console.log(arr.length);                    //          [ 8 ]
 
// console.log(arr[9]);                        //          [ undefined ]

// arr.length = 100;
// console.log(arr);                           //          [ 'ten', 11, 'twelve', 13, 14, '15', 16, '17', <92 empty items> ]

// arr[50] = 50;
// console.log(arr.length);                    //          [ 51 ]

// arr['50'] = "fifty";
// console.log(arr.length);                    //          [ 51 ]

// console.log(arr);
                                               /*          [
                                                                'ten',
                                                                11,
                                                                'twelve',
                                                                13,
                                                                14,
                                                                '15',
                                                                16,
                                                                '17',
                                                                <42 empty items>,
                                                                'fifty'
                                                            ]                       */
                 
                    
// let arr1={"A":"a","B":"b"}
// let arr11=["A":"a","B":"b"]              [ERROR]
// console.log(arr1);                           //          { A: 'a', B: 'b' }


//  push()    :=The push() method adds one or more elements to the end of an array and returns the new length of the array.

/*  pop()     :=The pop() method removes the last element from an array and returns that element. 
                This method changes the length of the array.        */

/*  shift()   :=The shift() method removes the first element from an array and returns that removed element. 
                This method changes the length of the array.            */

/*  unshift() :=The unshift() method adds one or more elements to the beginning of an array and returns the
                 new length of the array.      */

/*  splice()  :=The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
                 To access part of an array without modifying it, see slice().                  */


// let arr_new = [10, 11, 12, 13, 14, 15, 16, 17, 18];
// console.log(arr_new[-2]);                        //          [ undefined ]               

// arr_new.length = 100;
// console.log(arr_new.length);                     //          [ 100 ]

// arr_new.push(19);
// console.log(arr_new);                            //          [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
 
// arr_new.pop();
// arr_new.pop();
// arr_new.pop();
// console.log(arr_new);                            //          [ 10, 11, 12, 13, 14, 15, 16 ]

// arr_new.shift();
// arr_new.shift();
// arr_new.shift();
// console.log(arr_new);                            //          [ 13, 14, 15, 16, 17, 18 ]

// arr_new.unshift(9);
// console.log(arr_new);                            //          [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]

// arr_new.splice(5);
// console.log(arr_new);                            //          [ 10, 11, 12, 13, 14 ]

// arr_new.splice(5, 2);
// console.log(arr_new);                            //          [ 10, 11, 12, 13, 14, 17, 18 ]

// arr_new.splice(-4, 2);
// console.log(arr_new);                            //          [ 10, 11, 12, 13, 14, 17, 18 ]

// arr_new.splice(-4, -2);                      [NOT VALID]
// arr_new.splice(4, -2);                       [NOT VALID]
// arr_new.splice(-3);
// console.log(arr_new);                            //          [ 10, 11, 12, 13, 14, 15 ]
                                                        
// arr_new.splice(5, 2, 30, 31);
// console.log(arr_new);
                                                    /*          [   10, 11, 12, 13, 14, 
                                                                    30, 31, 17, 18
                                                                 ]                          */

// arr_new.splice(5, 2, 30, 31, 32, 33);
// console.log(arr_new);
                                                    /*          [
                                                                    10, 11, 12, 13, 14,
                                                                    30, 31, 32, 33, 17,
                                                                    18
                                                                ]                         */

// arr_new.splice(0, arr_new.length, 30, 31, 32, 33);
// console.log(arr_new);                            //           [ 30, 31, 32, 33 ]

// arr_new.splice(0, 0, 30, 31, 32, 33);
// console.log(arr_new);
                                                    /*          [
                                                                    30, 31, 32, 33, 10, 11,
                                                                    12, 13, 14, 15, 16, 17,
                                                                    18
                                                                ]         */

// arr_new.splice(5,30,31,32,33);
// console.log(arr_new);
                                                    /*          [
                                                                    10, 11, 12, 13,
                                                                    14, 31, 32, 33
                                                                ]                   */

// arr_new.splice(0,5,30,31,32,33);
// console.log(arr_new);
                                                    /*          [
                                                                    30, 31, 32, 33,
                                                                    15, 16, 17, 18
                                                                ]             */

// arr_new.splice(5,0,30,31,32,33);
// console.log(arr_new);
                                                    /*          [
                                                                    10, 11, 12, 13, 14, 30,
                                                                    31, 32, 33, 15, 16, 17,
                                                                    18
                                                                ]                     */

// console.log(arr_new.length);                     //          [ 9 ]

// console.log(arr_new.splice(2));
                                                    /*          [
                                                                    12, 13, 14, 15,
                                                                    16, 17, 18
                                                                ]                */


// let arr_new = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(arr_new.splice(3));
                                                    /*          [
                                                                    13, 14, 15, 16,
                                                                    17, 18, 19, 20
                                                                ]                           */

// console.log(arr_new.splice(3, 3));               //          [ 13, 14, 15  ]

// console.log(arr_new.splice(3, 3, 21, 22, 23));       //      [ 16, 17, 18 ]        




// DATE:-21/11/2022

/*  slice()   :=The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
                 where start and end represent the index of items in that array.The original array will not be modified.               */

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];

// arr_new.slice(2);
// console.log(arr_new.slice(3));
                                                    /*          [
                                                                    13, 14, 15, 16,
                                                                    17, 18, 19, 20
                                                                ]                         */
// console.log(arr_new.slice(3,12));
                                                    /*          [
                                                                    13, 14, 15, 16,
                                                                    17, 18, 19, 20
                                                                ]                         */

// console.log(arr_new.slice(-3,2));                //          []

// console.log(arr_new.slice(-3,-5));               //          []

// console.log(arr_new.slice(-5,-3));               //          [ 16, 17 ]

// let new_arr=arr_new.slice();
// console.log(new_arr);
                                                    /*          [
                                                                    10, 11, 12, 13, 14,
                                                                    15, 16, 17, 18, 19,
                                                                    20
                                                                ]                   */


/*  at()   :=Show Enter a index number on stor elemant          */

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];
// console.log(arr_new.at(4));                      //          [ 14 ]



/*  join()  :=Join all element of an array into String.           */

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];
// console.log(arr_new.join());                     //          [ 10,11,12,13,14,15,16,17,18,19,20 ]

// console.log(arr_new.join(""));                   //          [ 1011121314151617181920 ]

// console.log(arr_new.join("-"));                  //          [ 10-11-12-13-14-15-16-17-18-19-20 ]

// console.log(typeof arr_new.join());              //          [ string ]



// DATE:-24/11/2022

//  copy_array 

// let arr1=[10,20,30];
// let arr2=[100,200,300];
// let copy_array;

// copy_array=[...arr1,arr2];    // spread opertor             [ 10, 20, 30, [ 100, 200, 300 ] ]
                          
// copy_array=[...arr1,...arr2];                    //          10, 20, 30, 100, 200, 300 ]
                                
// copy_array=arr1;                                 //          [ 10, 20, 30 ]
                
// copy_array=arr1.slice(0);                        //          [ 10, 20, 30 ]
                           
// arr1.push(40);                                   //          [ 10, 20, 30, 40 ]                            

// console.log(arr1);
                    
// console.log(typeof copy_array);
// console.log(arr1==copy_array); 


