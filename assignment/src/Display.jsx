import { useState } from "react"

useState
function Display() {
    const [name, setName] = useState("")
    const [submittedName, setSubmittedName] = useState("")
  return (
    <div>
        <input 
            type="text" 
            placeholder="Enter your name" 
            value={name}
            onChange={(e)=>(setName(e.target.value))}
            />
        <button 
            onClick={()=>setSubmittedName(name)}
        >
            Submit
        </button>
        <h3>My name is :{submittedName}</h3>
    </div>
  )
}

export default Display