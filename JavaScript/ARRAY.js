// DATE:-19/11/2022

// Array

// let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// arr.length = 100;
// console.log(typeof arr);
//                       :-object
// console.log(arr);
/*                  :-[
                        10, 11, 12, 13, 14,
                        15, 16, 17, 18, 19
                      ]                                      */
// console.log(arr[0]);
//                   :-10
// console.log(arr[5]);
//                   :-15
// console.log(arr["10"]);
//                      :-undefined
// arr[50] = 550;
// arr[49] = undefined;
// arr[3.1] = 60;
// console.log(arr);
/*                :-[
                        10, 11, 12, 13, 14,
                        15, 16, 17, 18, 19.
                        <39 empty items>,
                        undefined,
                        550,
                        '3.1': 60
                    ]                           */


// let arr = ["ten", 11, "twelve", 13, 14, "15", 16, "17"];
// console.log(arr);
//                 :-["ten", 11, "twelve", 13, 14, "15", 16, "17"];
//The length property of an Array object represents the number of elements in that array
// console.log(arr.length);
//                       :-8
// arr.length = 100;
// console.log(arr);
//                 :-["ten", 11, "twelve", 13, 14, "15", 16, "17"];
// console.log(arr.length);
//                       :-100
// arr[9] = undefined;
// arr[5] = undefined;
// arr[5] = 20;
// arr[3.1] = 3.1;
// arr["A"] = "a";
// console.log(arr);
/*                 :-[
                        'ten',          11,
                        'twelve',       13,
                        14,             20,
                        16,             '17',
                        <1 empty item>, undefined,
                        '3.1': 3.1,     A: 'a'
                    ]                                   */
// console.log(arr.length);
//                       :-8
// console.log(arr[9]);
//                   :-undefined
// arr.length = 100;
// console.log(arr);
//                :-[ 'ten', 11, 'twelve', 13, 14, '15', 16, '17', <92 empty items> ]
// arr[50] = 50;
// console.log(arr.length);
//                       :-51
// arr['50'] = "fifty";
// console.log(arr.length);
//                       :-51
// console.log(arr);
/*                 :-[
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
// console.log(arr1);
//                  :-{ A: 'a', B: 'b' }


// let arr_new = [10, 11, 12, 13, 14, 15, 16, 17, 18];
// console.log(arr_new[-2]);
//                        :-undefined
// arr_new.length = 100;
// console.log(arr_new.length);
//                           :-100
// arr_new.push(19);
// console.log(arr_new);
//                   :-[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ] 
// arr_new.pop();
// arr_new.pop();
// arr_new.pop();
// console.log(arr_new);
//                    :-[ 10, 11, 12, 13, 14, 15, 16 ]
// arr_new.shift();
// arr_new.shift();
// arr_new.shift();
// console.log(arr_new);
//                     :-[ 13, 14, 15, 16, 17, 18 ]
// arr_new.unshift(9);
// console.log(arr_new);
//                    :-[ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]
// arr_new.splice(5);
// console.log(arr_new);
//                     :-[ 10, 11, 12, 13, 14 ]
// arr_new.splice(5, 2);
// console.log(arr_new);
//                     :-[ 10, 11, 12, 13, 14, 17, 18 ]
// arr_new.splice(-4, 2);
// console.log(arr_new);
//                     :-[ 10, 11, 12, 13, 14, 17, 18 ]
// arr_new.splice(-4, -2);          [NOT VALID]
// arr_new.splice(4, -2);           [NOT VALID]
// arr_new.splice(-3);
// console.log(arr_new);
//                     :-[ 10, 11, 12, 13, 14, 15 ]
// arr_new.splice(5, 2, 30, 31);
// console.log(arr_new);
/*                     :-[  10, 11, 12, 13, 14, 
                            30, 31, 17, 18
                         ]                          */
// arr_new.splice(5, 2, 30, 31, 32, 33);
// console.log(arr_new);
/*                     :-[
                            10, 11, 12, 13, 14,
                            30, 31, 32, 33, 17,
                            18
                         ]                         */
// arr_new.splice(0, arr_new.length, 30, 31, 32, 33);
// console.log(arr_new);
//                    :-[ 30, 31, 32, 33 ]
// arr_new.splice(0, 0, 30, 31, 32, 33);
// console.log(arr_new);
/*                    :-[
                            30, 31, 32, 33, 10, 11,
                            12, 13, 14, 15, 16, 17,
                            18
                        ]         */
// arr_new.splice(5,30,31,32,33);
// console.log(arr_new);
/*                    :-[
                            10, 11, 12, 13,
                            14, 31, 32, 33
                        ]         */
// arr_new.splice(0,5,30,31,32,33);
// console.log(arr_new);
/*                    :-[
                            30, 31, 32, 33,
                            15, 16, 17, 18
                        ]             */
// arr_new.splice(5,0,30,31,32,33);
// console.log(arr_new);
/*                    :-[
    10, 11, 12, 13, 14, 30,
    31, 32, 33, 15, 16, 17,
    18
]                     */
// console.log(arr_new.length);
//                           :-9
// console.log(arr_new.splice(2));
/*                              :-[
    12, 13, 14, 15,
    16, 17, 18
]                */
// let arr_new = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(arr_new.splice(3));
/*                              :-[
                                       13, 14, 15, 16,
                                       17, 18, 19, 20
                                  ]                           */
// console.log(arr_new.splice(3, 3));
//                                  :-[ 13, 14, 15 ]
// console.log(arr_new.splice(3, 3, 21, 22, 23));
//                                          :-[ 16, 17, 18 ]