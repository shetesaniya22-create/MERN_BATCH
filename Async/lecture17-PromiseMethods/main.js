
// Promise.resolve(10).then(console.log);
// Promise.reject("Rejected").catch(console.error);


function fetchUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("user");
        resolve();
    }, 7000);
        
    })
    
}

function fetchComment(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("comments");
        resolve();
    }, 100);
        
    })
    
}

function fetchPost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Post");
        resolve();
    }, 2000);
        
    })

}
// let startTime=performance.now();
// let promise1=fetchUser()
// .then(fetchComment)
// .then(fetchPost)
// .then(()=>{
//     let endTime=performance.now();
//     console.log(endTime-startTime);
    
// })


// let start=performance.now();
let result=Promise.race([fetchUser(),fetchComment(),fetchPost()])

.then(result=>{
    // let end=performance.now();
    // console.log(end-start);
    console.log(performance.now());
    
}).then(console.log(performance.now()))
.then(console.log(performance.now()))



// Promise.allSettled()--->Even though promise reject OR resolve then  
// Promise.any()--->
//Promise.race()