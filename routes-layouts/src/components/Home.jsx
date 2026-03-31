import Todos from "./Todos";

function Home() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ border: "1px solid", padding: "20px" }}>
        <h3>I've to complete all my pending tasks by today</h3>
        <button>Add this todo</button>
      </div>

      <Todos />
    </div>
  );
}

export default Home;
