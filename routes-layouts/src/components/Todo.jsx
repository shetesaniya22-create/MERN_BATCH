import { useParams } from "react-router-dom";

function Todo() {
  const { id } = useParams();

  const todos = [
    { id: 1, title: "Task 1", description: "Desc 1" },
    { id: 2, title: "Task 2", description: "Desc 2" },
  ];

  const todo = todos.find((t) => t.id === Number(id));

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
}

export default Todo;
