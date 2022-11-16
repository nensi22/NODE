//:-OPERATORS

console.log(10+20);   
//                :-30

console.log(10+"20");    
//                  :-1020

console.log(10 + + "20");   
//                      :-30

console.log(typeof +"20");   
//                      :-number

console.log(typeof "20");    
//                      :-string

console.log(10 + + "20" + 20);   
//                          :-50

console.log(10 * "20");  
//                    :-200

console.log(10 / "20");  
//                    :-0.5


// true=1        false=0
console.log(true+true);  
//                    :-2

console.log(true+false); 
//                      :-1

console.log(True+1);     
//                  True is not defined

console.log(true+10+20/5*false);     
//                             :-11

console.log(true/false);         
//                     :-Infinity

console.log(20*5/false);     
//                      :-Infinity

console.log(10+20/5*4-1);        
//                      :-25


// Assignment  Operator    =  
//                     [Assigns a value to a variable]  

// Comparision Operator    ==
//                     [Compar a value]

// Strictly Comparision Operator   ===
//                              [Compar a value and a datatype]

// console.log(10 == 10);   
//                   :-true

console.log(10 == "10");     
//                     :-true

console.log(10 === 10);     
//                     :-true

console.log(10 === "10");    
//                      :-false
console.log(10 == "ten");    
//                      :-false

console.log(0.1+0.2 == 0.3);     
//                         :-false

console.log(0.1+0.2);    
//                  :-0.30000000000000004

console.log(0.2+0.2 == 0.4);     
//                         :-true

console.log(0.1+0.3 == 0.4);     
//                         :-true


//DATATYPE:-

console.log(typeof "skill");     
//                         :-string

console.log(typeof 10);      
//                    :-number

console.log(typeof 10.1);        
//                      :-number

console.log(typeof true);      
//                      :-boolean

console.log(typeof undefined);       
//                           :-undefined

console.log(typeof NaN);     
//                     :-number
//          [NaN :- Not a Number]

console.log(typeof null);    
//                      :-object

console.log(typeof []);      
//                    :-object

console.log(typeof {});      
//                    :-object

console.log(typeof 100n);        
//                      :-bigint

console.log(typeof function(){});        
//                              :-function

console.log(typeof Symbol('A'));     
//                             :-symbol

