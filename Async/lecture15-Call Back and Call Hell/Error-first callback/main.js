//callback(error, result)
// 1st parameter -> error
// 2nd parameter -> success data

// If there is no error -> error is null
// If there is an error -> result is null

function fetchUserProfile(userId,callback){
    if(!userId){
        callback("User not defined", null);
    }else{
        callback(null, {user:"Saniya", id:1});
    }
}

function afterUserFetch(error,user){
    if(error){
        console.error(error);
    }else{
        console.log(user);
        
    }
}

fetchUserProfile(1, afterUserFetch);

fetchUserProfile(0, (error,user)=>{
    if(error){
        console.error(error);
    }else{
        console.error(user);
    }
})
