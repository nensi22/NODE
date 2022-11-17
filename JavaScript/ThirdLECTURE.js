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

// console.log(a);
// var a=10;
//        :-undefined


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