/* Function:=
    -->    Functions are one of the fundamental building blocks in JavaScript. 
    -->    A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value,but for a procedure to qualify as a function, 
           it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, 
           you must define it somewhere in the scope from which you wish to call it.                                 

    -->  Business logic called as Function.  Functions are used to reuse the business logic.

    syntax :
        function Function_Name(argument){
            statemant ;
        }               [ function defining ]
        function_name (Parameter);          [ function calling ]

    -->  We have following type of functions ut to "ES113":
            1. Named functions
            2.Anonymous functions
            3.Rest perameters in functions
            4.Default perameters in functions
            5.Optional perameters in functions
            6.Genrators
            7.Constructor functions
            8.IIFE [Immidiate Invokable functional Expressions]
*/

// DATE:-21/11/2022

//  EXAMPLE :=

// function Test(n)
// {
//     console.log( ` INSIDE FUNCTION ......${n} `);
//     return [];
// }

// let n=Test(10);
// console.log(typeof n);
                                        /*      INSIDE FUNCTION ......10 
                                                object                          */

// function Test(n)
// {
//     console.log( ` INSIDE FUNCTION ......${n} `);
// }
// Test(10);                                        //              INSIDE FUNCTION ......10 



// DATE:-22/11/2022

/*  1. Named Function
        --> The function with the partiular name called as named function..

     (1)  Function Defination
     (2)  Function Calling

     Syntax: -

         function Function_name(arg1, arg2, arg3) {
             Business logic
         }                      [ Function defination ]
        function_name(param 1, param 2, parm 3);       [ Function calling ]

*/

//  EXAMPLE :=

//  (1)
/*  function Fun_One() 
    {
        return "Hello";
    }
    console.log(Fun_One());              [ Hello ]                          */


//  (2)
// function fun_one(arg1,arg2,arg3)
// {
//     console.log(arg1,arg2,arg3);
// }
// fun_one("AngularJS","NodeJS","MongoDB");               //      [ AngularJS NodeJS MongoDB ]

// fun_one("ReactJS","NodeJS");                           //      [ ReactJS NodeJS undefined ]

// fun_one();                                             //      [ undefined undefined undefined ]

// fun_one(undefined,"NodeJS");                           //      [ undefined NodeJS undefined ]
                           
// fun_one(null,null,null);                               //      [ null null null ]
                      
// fun_one(null," ",null);                                //      [ null   null ]
                     
// fun_one(null,{},[]);                                   //      [ null {} [] ]


//  (3)
// function fun_zero()
// {
//     console.log(" INSIDE fun_zero");
//     return "Hello";
// }
// function fun_one()
// {
//     console.log(" INSIDE fun_one");
//     return fun_zero();
// }
// function fun_two()
// {
//     console.log(" INSIDE fun_two");                      //      [ INSIDE fun_two
//     return fun_one();                                    //        INSIDE fun_one
// }                                                        //        INSIDE fun_zero
// console.log(fun_two());                                  //       Hello   ] 
                                                                
                                                                         
//  (4)
// function fun_one()
// {
//     return "Hello";
// }              
// function fun_two()
// {
//     return fun_one;
// }
// console.log(fun_two());                                  //     [ [Function: fun_one] ]
                      
// console.log(fun_two()());                                //     [ Hello ]
                        

//  (5)
// function Fun_One(arg1, arg2, arg3) {
//     console.log(arg1(), arg2(), arg3());
    // console.log(arg1, arg2, arg3);                       //     [ [Function: Fun_Two] [Function: Fun_Three] [Function: Fun_Four] ]
// }
// function Fun_Two() {
//     return " _Hello_2";
// }
// function Fun_Three() {
//     return " _Hello_3";
// }
// function Fun_Four() {
//     return " _Hello_4";
// }
// Fun_One(Fun_Two, Fun_Three, Fun_Four);                   //     [ _Hello_2  _Hello_3  _Hello_4 ]



// DATE:-23/11/2022

/*  2.Anonymous Function 

    -> The Function without name called as anonymous function.
    -> Anonymous functions also called as "Arrow" functions, "Lamda" functions and "Callback" functions.
    -> we will respresent arrow functions with " => ".
    -> " => "  introduced in ES6.


     Synntax :: -
        (1) Function Defination
        (2) Function Calling

        (1)  Var / let /const variable_name = (arg1, arge2, ... , arg N) => {
             Business Logic;
            }                    [Function Ddefination]
        variable_name(param1, param2, ..., param N);  [ Function Calling]


        (2)  console.log (()=>{});      [ function anonymous]
*/     

//  EXAMPLE:

//  ( 1 )
//  let Fun_One = () => {
//     return "Hello";
// }
// console.log(Fun_One());                 //     [ Hello]


// ( 2 ) Single statement
// let Fun_One = () => "Hello";
// console.log(Fun_One());                 //      [ Hello]


// ( 3 )
// let Fun_One = () => {
//     return () => {
//         return () => {
//             return () => {
//                 return "Hello";
//             }
//         }
//     }
// }
// console.log(Fun_One()()()());  // Chaining Function.         //       [Hello]


// ( 4 )
// let Fun_One = (str) => `Hey ${str}`;
// let str = " Nensi ";
//     console.log(Fun_One(str));                 //        [Hey  Nensi  ]              
                                


// ( 5 )
//  let Fun_One = (arg1) => {
//     console.log(arg1());
// }
// Fun_One(() => "Hello");                        //        [Hello  ]  
                        

                        
// ( 6 )
// let Fun_Two = () => "Hello_Fun_2";
// let Fun_One = (arg1, arg2, arg3) => {
//     console.log(arg1(), arg2(), arg3());
// }   
// Fun_One(() => { return "Hello_1" }, Fun_Two, () => "Hello_3");                      //        [Hello_1 Hello_Fun_2 Hello_3]
                                                                
// Fun_One(() => "Hello_1", () => "Hello_2", () => "Hello_3");                         //        [ Hello_1 Hello_2 Hello_3  ] 
  


// DATE:-24/11/2022

/*  3.Rest perameters in functions 

    - by using rest parameters, we can hold / store more than one value " ES6 "
    - we will represent rest parameters with " ... " operator
    - "..." operator called as spread operator
    - we can have only "one " spread operator per function
    - position of spread operator shoud be last in occurances

    --> The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
        providing a way to represent variadic functions in JavaScript.

    --> function definition's last parameter can be prefixed with ... (three U+002E FULL STOP characters), which 
        will cause all remaining (user supplied) parameters to be placed within a standard JavaScript array. Only 
        the last parameter in a function definition can be a rest parameter.

    Syntax:=
            function f(a, b, ...theArgs) {
                // …
            }
   THE DIFFERENCE BETWEEN REST PARAMETER AND THE ARGUMENT OBJECT

        -->There are three main differences between rest parameters and the arguments object:
            
            - The arguments object is not a real array, while rest parameters are Array instances, 
              meaning methods like sort(), map(), forEach() or pop() can be applied on it directly.

            - The arguments object has additional functionality specific to itself (like the callee property).

            - The ...restParam bundles all the extra parameters into a single array, therefore it does not contain any 
              named argument defined before the ...restParam. Whereas the arguments object contains all of the 
              parameters — including the parameters in the ...restParam array — bundled into one array-like object.

*/

// function fun_one(arg,...arg1)
// {
//     console.log(arg);
//     console.log(arg1);
// }

// fun_one();                               //          undefined   
                                            //          []

// fun_one("Hello_1");                      //          Hello_1     
                                            //          []
                    
// fun_one("Hello_1","Hello_2");            //          Hello_1
                                            //          [ 'Hello_2' ]
                    
// fun_one("Hello_1","Hello_2","Hello_3");  //          Hello_1
                                            //          [ 'Hello_2', 'Hello_3' ]

// fun_one(undefined,undefined);            //          undefined
                                            //          [ undefined ]

// fun_one(undefined,null);                 //          undefined
                                            //          [ null ]



/*   4.Default perameters in functions
        - while defining the function we will initilize arguments with default values
        - this concept introduced in "ES6"

        --> Default function parameters allow named parameters to be initialized with default values if no 
            value or undefined is passed.

        --> In JavaScript, function parameters default to undefined. However, it's often useful to set a different 
            default value. This is where default parameters can help.

        --> In the following example, if no value is provided for b when multiply is called, b's value would be undefined 
            when evaluating a * b and multiply would return NaN.

        Syntax:=
            function fnName(param1 = defaultValue1,* ...,* paramN = defaultValueN) {
                // …
            }

 */  

// function fun_one(arg1="Hello_1",arg2="Hello_2",arg3="hello_3")
// {
//     console.log(arg1,arg2,arg3);
// }

// fun_one();                                       //         Hello_1 Hello_2 hello_3
            
// fun_one("H_1","H_2","H_3");                      //          H_1 H_2 H_3
                            
// fun_one("welcome_1","welcome_2","welcome_3");          //            welcome_1 welcome_2 welcome_3
                                            
// fun_one(undefined,undefined,undefined);          //          Hello_1 Hello_2 hello_3
                                        
// fun_one(null,null,null);                         //           null null null

// fun_one(undefined,undefined,"H_3");              //          Hello_1 Hello_2 H_3
                                    


// DATE:-25/11/2022

