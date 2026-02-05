// setTimeout(()=>{
//     console.log("Step 1 completed");
//     setTimeout(()=>{
//         console.log("Step 2 completed");
//         setTimeout(()=>{
//             console.log("Step 3 completed");
            
//         },1000);
        
//     },2000);
    
// },3000);

// function orderFood(cb){
//     setTimeout(()=>{
//         cb();
//     },1000)
// }

// function prepareFood(cb){
//     setTimeout(()=>{
//         cb();
//     },2000)
// }

// function sendForDelivery(cb){
//     setTimeout(()=>{
//         cb();
//     },3000)
// }

// function foodDelivered(){
//     console.log("Food is delieverd");
    
// }

// orderFood(()=>{
//     prepareFood(()=>{
//         sendForDelivery(()=>{
//             foodDelivered();
//         })
//     })
// })



//Fetch user
//validate user
//display dashboard

function fetchUserProfile(userId, cb) {
    console.log("Fetching user");

    setTimeout(() => {
        if (!userId) {
            cb("User not found", null);
        } else {
            cb(null, { user: "Parth", id: 101 });
        }
    }, 1000);
}

function validateUser(user, cb) {
    console.log("Validating user");
    setTimeout(() => {
        if (user.id > 0) {
            cb(null, user);
        } else {
            cb("Invalid user", null);
        }
    }, 2000);
}

function displayDashboard(user) {
    console.log("Welcome to dashboard,", user.user);
}

fetchUserProfile(1, function (error, user) {
    if (error) {
        console.error(error);
        return;
    }

    validateUser(user, function (error, validUser) {
        if (error) {
            console.error(error);
            return;
        }

        displayDashboard(validUser);
    });
});


//Nested call back is gettting worst for large scenarios which is also known as call back hell (Pyramid of Doom)
//Pyramid of Doom is concept in which multiple of callback nested inside each other each task is depends on previous one

//Issues with callBack pattern
//hard to read
//Hard to debug
//Hard to maintain