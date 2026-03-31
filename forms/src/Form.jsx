function Form(){
    function handleSubmit(){
        event.preventDefault();
        console.log("Form was submitted");
    
    }

return(
    <>
    <form onSubmit={handleSubmit}>
        
        <input type="text" placeholder='Write something' /><br /><br />
        <button type='submit'>Submit</button>

    </form>
    </>

)}

export default Form;