// Success-error handler-->

// Main function: fetches user profile
function fetchUserProfile(userId, successHandler, errorHandler) {
    if (!userId) {
        // Call the error handler
        errorHandler("User not found");
    } else {
        // Call the success handler
        successHandler({ name: "Saniya", id: userId });
    }
}

// Success handler
function onSuccess(user) {
    console.log("Success:", user);
}


// Error handler
function onError(error) {
    console.error("Error:", error);
}

fetchUserProfile(1, onSuccess, onError);  // Success
fetchUserProfile(0, onSuccess, onError);  // Error
