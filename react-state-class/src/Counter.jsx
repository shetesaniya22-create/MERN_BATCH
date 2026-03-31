import { useState } from "react";

function Counter(){
    let [count,setCount]=useState(0);

    let increasCount=()=>{
        setCount(count+1);//triggers re-render but this is not good way count+1
        console.log(count);
        

    };

    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={increasCount}>Increase Counter</button>
        </div>
    )
}

export default Counter;


