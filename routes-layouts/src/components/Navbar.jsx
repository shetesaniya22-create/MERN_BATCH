import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <h2>Todos</h2>
      <Link to="/">Home</Link>
      <Link to="/addTodo">Add Todos</Link>
    </div>
  );
}

export default Navbar;
