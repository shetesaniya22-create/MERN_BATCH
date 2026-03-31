import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("Saniya");

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {/* <button
        onClick={() => {
          setName(name);
        }}
      >
        Name= {name}
      </button> */}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}

export default App;
