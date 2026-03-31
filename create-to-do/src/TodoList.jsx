import { useState } from "react";

export default function TodoList(){
    let [todos,setTodos]=useState(["sample task"])

    let [newTodo,setNewTodo]=useState("");

    let addNewtask=()=>{
        console.log("We have to add new task in our todo");
        if (newTodo.trim() === "") return;
        setTodos([...todos,newTodo]);
        setNewTodo("")
    }
    let deleteTodo=(id)=>{
        console.log(id);
        
            console.log("Task to be deleted");
            

        }

    return(
        <>
        <input
            placeholder="Add a task"
            value={newTodo}
            onChange={(e)=> setNewTodo(e.target.value)}
        />
        <br /><br />
        <button onClick={addNewtask}>Add Task</button>
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <hr />
        <h4>Tasks Todo</h4>
        <ul>

        {todos.map((todo,index)=>{
            return <li key={index}>
                <span > {todo}</span>
                <button onClick={()=>deleteTodo(index)}>Delete</button>
                <br /><br />
                </li>

            })}
        </ul>
        </>
    )
}