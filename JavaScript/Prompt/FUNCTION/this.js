// console.log(typeof this)                   //  object

// let student = {
//     name:"raj",
//     age:17,
//     course:"NodeJS",
// }
// console.log(typeof student)                 //  object
// console.log(student.name)                   //  raj
// console.log(student.age)                    //  17
// console.log(student.course)                 //  NodeJS


// let student = {
//     name:"raj",
//     age:17,
//     course:"NodeJS",
//     getStudentName:function(){
         // console.log(this.name);
//         return this;
//     }
// }
// student.getStudentName();                            //     raj
// console.log(student.getStudentName())                    
                                                                /*
                                                                        {
                                                                            name: 'raj',
                                                                            age: 17,
                                                                            course: 'NodeJS',
                                                                            getStudentName: [Function: getStudentName]
                                                                        }
                                                                */


// let student1 = {
//     name:"raj",
//     age:17,
//     course:"NodeJS",
// } 
// let student2 = {
//     name:"rush",
//     age:17,
//     course:"React",   
// }  
// let getStudentName = function(){
//      console.log(this.name+"-"+"city"+"-"+"state"+"-"+"country")
// }
// getStudentName.call(student1);               //  raj
// getStudentName.call(student2);               //  rush 


let student1 = {
    name:"raj",
    age:17,
    course:"NodeJS",
} 
let student2 = {
    name:"rush",
    age:17,
    course:"React",   
}  
let getStudentName = function(){
    console.log(this.name+"-"+"surat"+"-"+"Gujarat"+"-"+"India")
}
// getStudentName.apply(student1,["city","state","country"]);                   //      raj-surat-Gujarat-India
// getStudentName.apply(student2,["city","state","country"]);                   //      rush-surat-Gujarat-India