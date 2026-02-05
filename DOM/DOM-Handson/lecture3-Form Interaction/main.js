document.addEventListener("DOMContentLoaded",function(){
    const formElement=document.querySelector("#user-info");

    formElement.addEventListener("submit",function(event){
        event.preventDefault();//not to reload page
        console.log({event});  

        //create object of form
        let formData=new FormData(formElement);
        // console.log(formData);

        let firstName=formData.get("firstName");
        // console.log(`${firstName}`);

        let lastName=formData.get("lastName");
        // console.log(`${lastName}`);
        
        for(let value of formData.values()){
            console.log(value);
            
        }

         for(let key of formData.keys()){
            console.log(key);
            
        }
        
        for(let [key,value] of formData.entries()){
            console.log({key,value});
            
        }
        
    })
})