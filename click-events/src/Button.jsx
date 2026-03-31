
function Button(){
    function printHello(event){
    console.log("Hello Students");
    console.log(event);
    
    
}

function printBye(){
    console.log("Byee");
    
}
function handleDoubleClick(){
    console.log("Button double clicked!");
    
}
    return(
        <div>
            <button onClick={printHello}>Click Me</button>
            <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Ea velit, repellat facilis aliquam id 
                voluptatum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
            <button onDoubleClick={handleDoubleClick}>Double Click</button>
        </div>
    )
}
export default Button;