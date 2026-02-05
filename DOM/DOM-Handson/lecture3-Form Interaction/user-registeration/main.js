document.addEventListener("DOMContentLoaded",function(){
    let form=document.querySelector(".container");
    let submit=document.querySelector("button[type='submit']")

    form.addEventListener('change',function(){
        const isValid=form.checkValidity();
        if(!isValid){
            submit.setAttribute("disabled","");
        }else{
            submit.removeAttribute("disabled")
        }
    })

    form.addEventListener("submit",function(event){
        event.preventDefault();
        const formData=new FormData(form);
        let submittedValues="";

        for(let [key,values] of formData.entries()){
            submittedValues+=`${key} : ${values}\n`
        }

        alert(submittedValues);
        form.reset();
    })
})


//FormData--->It is an built-in object used to collect form values 
// checkValidity() is built-in property used to check whether the form element follows all the rule specified in HTML document
//event.preventDefault()--->It is an in-built js method which prevents default behaviour of browser