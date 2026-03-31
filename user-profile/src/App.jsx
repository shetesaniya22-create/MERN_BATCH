import "./App.css";
import User from "./User";

function App() {
  const users = [
    { name: "Saniyaa_Shete", bio: "Selenophile" },
    { name: "Prachi_Shete", bio: "pcbjhshile" },
    { name: "Alex", bio: "Photographer" },
  ];
  return (
    <div>
      {users.map((user, index) => (
        <User key={index} name={user.name} bio={user.bio}>
          <button>Follow</button>
        </User>
      ))}
    </div>
  );
}

export default App;
