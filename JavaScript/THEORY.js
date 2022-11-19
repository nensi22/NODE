// DATE:- 15/11/2022

//:-OPERATORS

// console.log(10+20);   
//                :-30

// console.log(10+"20");    
//                  :-1020

// console.log(10 + + "20");   
//                      :-30

// console.log(typeof +"20");   
//                          :-number

// console.log(typeof "20");    
//                      :-string

// console.log(10 + + "20" + 20);   
//                          :-50

// console.log(10 * "20");  
//                    :-200

// console.log(10 / "20");  
//                    :-0.5


// true=1        false=0
// console.log(true+true);  
//                    :-2

// console.log(true+false); 
//                      :-1

// console.log(True+1);     
//                  True is not defined

// console.log(true+10+20/5*false);     
//                             :-11

// console.log(true/false);         
//                     :-Infinity

// console.log(20*5/false);     
//                      :-Infinity

// console.log(10+20/5*4-1);        
//                      :-25


// Assignment  Operator    =  
//                     [Assigns a value to a variable]  

// Comparision Operator    ==
//                     [Compar a value]

// Strictly Comparision Operator   ===
//                              [Compar a value and a datatype]

// console.log(10 == 10);   
//                   :-true

// console.log(10 == "10");     
//                     :-true

// console.log(10 === 10);     
//                     :-true

// console.log(10 === "10");    
//                      :-false

// console.log(10 == "ten");    
//                      :-false

// console.log(0.1+0.2 == 0.3);     
//                         :-false

// console.log(0.1+0.2);    
//                  :-0.30000000000000004

// console.log(0.2+0.2 == 0.4);     
//                         :-true

// console.log(0.1+0.3 == 0.4);     
//                         :-true


//DATATYPE:-

// console.log(typeof "skill");     
//                         :-string

// console.log(typeof 10);      
//                    :-number

// console.log(typeof 10.1);        
//                      :-number

// console.log(typeof true);      
//                      :-boolean

// console.log(typeof undefined);       
//                           :-undefined

// console.log(typeof NaN);     
//                     :-number
//          [NaN :- Not a Number]

// console.log(typeof null);    
//                      :-object

// console.log(typeof []);      
//                    :-object

// console.log(typeof {});      
//                    :-object

// console.log(typeof 100n);        
//                      :-bigint

// console.log(typeof function(){});        
//                              :-function

// console.log(typeof Symbol('A'));     
//                             :-symbol



// *****************************************************
// DATE:- 16/11/2022

// console.log("0"==false);
//                        :-true

// console.log(false == "0");
//                          :-true

// console.log(false ==="0");
//                          :-false

// var a=1,b=2;
// console.log(a++b);       [ERROR]
// console.log(a + + b);
//                     :-3

// var a=1,b=2,c;
// console.log(a++);
//                 :-1
// console.log(++a);
//                 :-3

// var a=1,b=2,c;
// c= --a && b++;
// console.log(a,"-",b,"-",c);
//                           :-0-2-0

// XOR -> EXCLUSIVE OR [^]
// console.log(1^1);
//                :-0
// console.log(1^0);
//                :-1
// console.log(0^1);
//                 :-1
// console.log(0^0);
//                 :-0
// console.log(1^0^1);
//                  :-0
// console.log(0^1^0);
//                  :-1

// * STRING :-
// var str1="Hello Welcome To SkillQode"+" str1";
// var str2='Hello Welcome To SkillQode'+" str2";
// var str3=`Hello Welcome To SkillQode ${"str3"}`;
//                              [ ` -> template literal]
// console.log(str1);
//              :-Hello Welcome To SkillQode str1
// console.log(str2);
//              :-Hello Welcome To SkillQode str2
// console.log(str3);
//              :-Hello Welcome To SkillQode str3

// var a=10;
// var str1="Hello Welcome "+ a +" To SkillQode"+" str1";
// var str2='Hello Welcome To SkillQode'+" str2";
// var str3=`Hello Welcome ${a}
//             To SkillQode ${"str3"}`;
// console.log(str1);
//              :-Hello Welcome 10 To SkillQode str1
// console.log(str2);
//              :-Hello Welcome To SkillQode str2
// console.log(str3);
//              :-Hello Welcome 10
//                            To SkillQode str3


//  * Declare Variable using:-var
//                            let
//                            const

// var
    /*  [After you declare a variable, you can reference it by name elsewhere in your code.]
            [You can give an existing variable a new value at any point after it’s declared.]   */
        
// var a=10;
// a=20;
// console.log(a);
//              :-20

// var a=10;
// console.log(a);
//              :-10


// let
    /*  [A repeated declaration of the same variable is an error]
            [A variable should be declared only once]   */

// let a=10;
// console.log(a);
//                  :-10

// let a=10;
// console.log(a + '10');
//                      :-1010
// console.log( typeof (a + '10'));
//                               :-string

// let a=10;
// console.log(a+true);
//                   :-11
// console.log(typeof (a+true));
//                            :-number

// let a=10;
// let b="10" + "a";
// console.log(b);
//              :-10a

// let a=10;
// a=20;
// console.log(a);
//              :-20

// console.log(a);
// let a=10;                [REFERENCEERROR -- Cannot access 'a' before initialization]


// const
    /*  [A constant holds a value that doesn’t change. To declare a constant, you use the const keyword. 
            When defining a constant, you need to initialize it with a value.]
        [Once defining a constant, you cannot change its value.]    */

// const a=10;
// a=20;
// console.log(a);              [TYPEERROR --Assignment to constant variable. ]

// const a=10;
// console.log(a);
//              :-10

// console.log(a);
// const a=10;              [REFERENCEERROR: Cannot access 'a' before initialization]


// Undefined  , null  ,NaN
// console.log(undefined == undefined);
//                                  :-true
// console.log(undefined === undefined);
//                                    :-true
// console.log(null == null);
//                         :-true
// console.log(null === null);
//                         :-true
// console.log(NaN == NaN);
//                       :-false
// console.log(NaN === NaN);
//                       :-false



// ***********************************************
// DATE:- 17/11/2022

// console.log(10 * "5");
//                      :-50

// console.log();
//              :-

// undefined  NaN null
// console.log(null == 0);
//                      :-false
// console.log(undefined == 0);
//                          :-false
// console.log(NaN == 0);
//                      :-false

// console.log(undefined == null);
//                              :-true
// console.log(undefined === null);
//                              :-false
// console.log(undefined == NaN);
//                             :-false
// console.log(NaN == null);
//                        :-false
// console.log(NaN === null);
//                         :-false


// DIFFERENCE BETWEEN VAR AND LET

/*               VAR                                  LET
    Var keyword introduced in "ES1".       Let keyword introduced in "ES6"

    Var keyword allows the duplicate       Let keyword not allows  the duplicate 
    variable.                              variable.

    Variable hosting issue raised          We can overcome variable  hosting 
    with var keyword.                      with let keyword.

    Scop rule break by var keyword.        let keyword obey the scop rule.
    
    Global polluting issue raised          We can overcome global polluting 
    beacuase of var keyword.               by using let keyword.                                  */


// var a=10;
//   console.log(a);
//                 :-10
// var a=20;
//   console.log(a);
//                 :-20

// let a=10;
//   console.log(a);
// let a=20;
// console.log(a);

// let a=10;
// {
//     let a=100;
// }
// console.log(a);
//              :-10

// var a=10;
// {
//      a=20;
// }
// console.log(a);
//               :-20

// {
//     a=20;
// }
// console.log(a);
// var a=10;
//               :-20

// {
//     a=20;
// }
// console.log(a);
// let a=10;               [ ReferenceError: Cannot access 'a' before initialization ]