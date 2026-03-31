import { Link } from "react-router-dom";

function Todos() {
  const todos = [
    { id: 1, title: "Task 1", description: "Desc 1" },
    { id: 2, title: "Task 2", description: "Desc 2" },
    { id: 3, title: "Task 3", description: "Desc 3" },
    { id: 4, title: "Task 4", description: "Desc 4" },
  ];

  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{ border: "1px solid", padding: "10px", margin: "10px" }}
        >
          <h3>{todo.title}</h3>

          {/* 👇 View Button */}
          <Link to={`/todos/${todo.id}`}>
            <button>View</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Todos;
