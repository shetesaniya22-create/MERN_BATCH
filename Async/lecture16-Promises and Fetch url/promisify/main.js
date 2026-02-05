//Promisify only support error-first callback

function fetchUserProfile(userId,callback){
    setTimeout(() => {
        if(!userId){
        callback("User not defined", null);
    }else{
        callback(null, {user:"saniya", id:1});
    }
        
    }, 1000);

}
fetchUserProfile(1,(error,profile)=>{
    if(error){
        console.error(error);
        
    }else{
        console.log(profile);
        
    }
})

function promisify(fn){
    return function(...args){
        console.log(arguments);
        console.log(args);
        return new Promise((resolve, reject) => {
            fn(...args,)
        })
        
        
    }

}