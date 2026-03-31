import './App.css';
import MsgBox from './MsgBox';

function App() {
  let names=[
    {id:1, name:"Saniya",color:"red"},
    {id:2,name:"Prachi",color:"green"},
    {id:3,name:"Tejal",color:"blue"},

];
  

  return (
    <>
      {names.map((person)=>(
      < MsgBox
        key={person.id}
        name={person.name}
        color={person.color}
      />

      ))}
    </>
  );
}

export default App
