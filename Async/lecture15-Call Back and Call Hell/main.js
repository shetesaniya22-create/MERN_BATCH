// Functions are called “first-class citizens” (or first-class functions) in JavaScript 
// because they are treated like any other value
// (just like numbers, strings, or objects).


function orderFood(callBack){
    console.log("Food orderd");

    setTimeout(()=>{
        console.log("food prepared");
        setTimeout(()=>{
            console.log("Out for deleivery");
            useCallback();
            
        },3000);
        
    },3000);
    
}
function foodDelivered(){
    console.log("Food delivered");
    
}
orderFood(foodDelivered);
console.log("Doing something else till order received");








function fetchUserProfile(userId, cb) {
    console.log("Fetching user...");

    setTimeout(() => {
        if (!userId) {
            cb("User not found", null);
        } else {
            cb(null, { id: userId, name: "Saniya" });
        }
    }, 1000);
}

function validateUser(user, cb) {
    console.log("Validating user...");

    setTimeout(() => {
        if (user.id > 0) {
            cb(null, user);
        } else {
            cb("Invalid user", null);
        }
    }, 1000);
}

function displayDashboard(user) {
    console.log("Welcome to dashboard,", user.name);
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

        displayDashboard(validUser)

    })
});


