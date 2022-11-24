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