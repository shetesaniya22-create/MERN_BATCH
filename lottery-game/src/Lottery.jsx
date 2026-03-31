import { useState } from 'react';
import './App.css';

function Lottery() {
    const [ticket, setTicket] = useState(null);
    const [result, setResult] = useState('');

function handleClick() {
    let ticketNum = Math.floor(Math.random() * 1000);
    let sum = 0;
    let temp = ticketNum;

    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    
    let ticketStr = ticketNum.toString().padStart(3, '0');

    
    setTicket(ticketStr);
    if (sum === 15) {
        setResult('You won the lottery! 🎉');
    } else {
        setResult('Better luck next time 😢');
    }
}

return (
    
    <div style={{  textAlign: 'center', marginTop: '50px', display:"flex",flexDirection:"column",border:"1px solid white",borderRadius:"10px"}}>
    <h2>Lottery Game</h2>
    <button onClick={handleClick} style={{ color:"palevioletred",padding: '10px 20px', fontSize: '16px',margin:"16px" }}>
        Generate Lottery Ticket
    </button>

    {ticket && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
            <p>Ticket Number: {ticket}</p>
            <p>{result}</p>
        </div>
    )}
    </div>
);
}

export default Lottery;