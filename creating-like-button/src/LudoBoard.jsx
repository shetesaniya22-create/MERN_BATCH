import { useState } from "react";

export default function LudoBoard(){
    let [moves,setMoves]=useState({
        blue:0, 
        red:0, 
        yellow:0,
        green:0
    });
    // let [count,setCount]=useState(0);

    let updateAll=(color)=>{
        setMoves(prev=>({
            ...prev,
            [color]:prev[color]+ 1
    

        }));
        console.log(moves);//still shows the old values due to async
        
    }
    
    return(
        <div>
        <h1>Game Begins</h1>
        <div className="finalBoard">
            <p>Blue Moves={moves.blue}</p>
            <button
                style={{backgroundColor:"blue", color:"black"}} 
                onClick={()=>updateAll("blue")}
            >
                +1
            </button>

            <p>Yellow Moves={moves.yellow}</p>
            <button
                    style={{backgroundColor:"yellow", color:"black"}}
                    onClick={()=>updateAll("yellow")}
            >
                +1
            </button>
            
            <p>Green Moves={moves.green}</p>
            <button
                style={{backgroundColor:"green",color:"black"}}
                onClick={()=>updateAll("green")}
            >
                +1
            </button>
        
            <p>Red Moves={moves.red}</p>
            <button
                style={{backgroundColor:"red",color:"black"}}
                onClick={()=>updateAll("red")}
            >
                +1
            </button>



        </div>
        </div>
    )
}