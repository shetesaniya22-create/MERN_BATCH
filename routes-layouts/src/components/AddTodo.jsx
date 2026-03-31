import { useState } from "react";
function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      title,
      description,
    };
    console.log(newTodo);
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>Add Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />

          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <br />

          <button type="submit">Add Todo</button>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
