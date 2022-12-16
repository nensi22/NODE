/*
    promises are "special" javascript objects
    promises are solution for "callback hell"
    "producer" will create the "promises"
    "consumer" will consume the "promises"
    "Promise" is the class, used to create the "promises"
    we can consume Promises in 2 ways
    1) then()
    2) async & await keywords
*/
    


    // let promise1 = new Promise((resolve,reject)=>{
    //     reject("promises");
    // });
    // console.log(typeof (promise1))
    // promise1.then((posRes)=>{
    //     console.log("resole : "+posRes);
    // },(errRes)=>{
    //     console.log("reject :"+errRes);
    // });
    // welcome to promises


    // console.log("Before")
    // let promise1 = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve("Hello");
    //     },5000);
    // });
    // promise1.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    // console.log("After")    



    // let promise1 = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve("Hello_1");
    //     },0);
    // });
    // let promise2 = new Promise((resolve,reject)=>{
    //     resolve("Hello_2");
    // });
    // promise1.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    // promise2.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });


// let promise1 = new Promise((resolve,reject)=>{
//     resolve("Hello_1");
// });
// let promise2 = new Promise((resolve,reject)=>{
//     resolve("Hello_2");
// });
// let promise3 = new Promise((resolve,reject)=>{
//     resolve("Hello_3");
// });
//     promise1.then((posRes)=>{
//         console.log(posRes);
//     },(errRes)=>{
//         console.log(errRes);
//     });
//     promise2.then((posRes)=>{
//         console.log(posRes);
//     },(errRes)=>{
//         console.log(errRes);
//     });
//     promise3.then((posRes)=>{
//         console.log(posRes);
//     },(errRes)=>{
//         console.log(errRes);
//     });

    // Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });

    // [ 'Hello_1', 'Hello_2', 'Hello_3' ]




    // Promise.race([promise1,promise2,promise3]).then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    //Hello_1




    // let promise1 = new Promise((resolve,reject)=>{
    //     resolve("Hello_1");
    // });
    // let promise2 = new Promise((resolve,reject)=>{
    //     resolve("Hello_2");
    // });
    // let promise3 = new Promise((resolve,reject)=>{
    //     reject("Error");
    // });
    //     Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    //         console.log(posRes);
    //     },(errRes)=>{
    //         console.log(errRes);
    //     });
    // Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
// --------------------------------------------------------------------------------------


    // let promise1 = new Promise((resolve,reject)=>{
    //     resolve("Hello");
    // });
    // async function my_fun(){
    //     let res = await promise1;
    //     console.log(res);
    // };
    // my_fun();               //Hello


    // function add(num){
    //     return new Promise((resolve,reject)=>{
    //         resolve(num+5);
    //     })
    // };
    // function sub(num){
    //     return new Promise((resolve,reject)=>{
    //         resolve(num-3);
    //     })
    // };
    // function mul(num){
    //     return new Promise((resolve,reject)=>{
    //         resolve(num*2);
    //     })
    // };
    // function div(num){
    //         return new Promise((resolve,reject)=>{
    //             resolve(num/2-2);
    //         })
    // }
    // async function consume(){
    //     let addRes = await add(5);
    //     let subRes = await sub(addRes);
    //     let mulRes = await mul(subRes);
    //     let divRes = await div(mulRes);
    //     console.log(addRes, subRes, mulRes, divRes);
    // };
    // consume();