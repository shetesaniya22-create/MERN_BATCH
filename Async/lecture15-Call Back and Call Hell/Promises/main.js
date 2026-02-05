//Promise--->Object that represents the eventual completion or failure of an asynchronous operation and resulting value


// .then() ---> success
// .catch() ----> error
// .finally() -----> always


//promiseState---> 
// fulfilled(if succeed)
// pending---> (dont know outcome)
// reject (error / unsuccessful state)
// settled----> outcome is known --- i.e either fulfilled or rejected


// const jobPromise =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Placed");
//     //    reject("Will be placed after the months");
//     },2000);

// });
// console.log("Promise");

// //Success outcome
// jobPromise.then((result)=>{
//     console.log(result);
    
// }).catch(error => //catch block
//     console.error(error));

// //Finally block-----> always execute
// jobPromise.finally(()=>{
//     console.log("Will be called irrespective of success or error");
    
// })

//Promise Chaining--------------------------->
// setTimeout(()=>{
//     console.log("Step 1 completed");
//     setTimeout(()=>{
//         console.log("Step 2 completed");
//         setTimeout(()=>{
//             console.log("Step 3 completed");
            
//         },1000);
        
//     },2000);
    
// },3000);


// function wait(duration){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve()
//         },duration)
//     })
// }

// wait(1000).then(()=>{
//     console.log("Step 1 completed");
//     return wait(1000);
// }).then(()=>{
//     console.log("Step 2 completed");
//     return wait(2000);
// }).then(()=>{
//     console.log("Step 3 completed");
//     return wait(3000);
// })


function orderFood(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food is ordered");
            resolve();
        }, duration);
    });
}

function prepareFood(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food is prepared");
            resolve();
        }, duration);
    });
}

function sendFood(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food is sent");
            resolve();
        }, duration);
    });
}

function deliverFood(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food is delivered");
            resolve();
        }, duration);
    });
}

orderFood(1000)
    .then(() => prepareFood(2000))
    .then(() => sendFood(1500))
    .then(() => deliverFood(2000));
