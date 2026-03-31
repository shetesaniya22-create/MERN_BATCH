import { Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:id" element={<Todo />} />
        <Route path="/addTodo" element={<AddTodo />} />
      </Routes>
    </>
  );
}

export default App;
