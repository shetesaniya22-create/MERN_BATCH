//Promises are the objects that can represents eventual completion or rejection
//of asynchronous operation

// .then() ---> success
// .catch() ----> error
// .finally() -----> always


//promiseState---> 
// fulfilled(if succeed)
// pending---> (dont know outcome)
// reject (error / unsuccessful state)
// settled----> outcome is known --- i.e either fulfilled or rejected

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
    .then(() => deliverFood(2000))
    .catch(e => console.error());