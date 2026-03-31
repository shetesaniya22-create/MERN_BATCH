import { useState } from 'react';


function Input() {
    const [name, setName] = useState("")
    const [names, setNames] = useState([])

    function handleSubmit(){
        if(name.trim()==="") return;

        setNames([...names,name]);

        setName("");
    }

  return (
    <div>
        <input 
            type="text" 
            value={name} 
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
            
            
        />

        <button onClick={handleSubmit}>Submit</button>

        <ul>
            {names.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>

    </div>
)
}



export default Input
