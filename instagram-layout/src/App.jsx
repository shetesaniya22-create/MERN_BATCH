import "./App.css";
import User from "./User";

// Import avatars
import user1 from "./assets/user1.jpeg";
import user2 from "./assets/user2.jpeg";
import user3 from "./assets/user3.jpeg";

function App() {
  const users = [
    { name: "Saniyaa_Shete", bio: "Selenophile", photo: user1 },
    { name: "Prachi_Shete", bio: "Traveller", photo: user2 },
    { name: "Alex", bio: "Photographer", photo: user3 },
  ];

  return (
    <div className="container">
      <h2 style={{ color: "black" }}>Welcome to Mini Instagram</h2>
      {users.map((user, index) => (
        <User key={index} name={user.name} bio={user.bio} photo={user.photo}>
          <button className="follow-btn">Follow</button>
        </User>
      ))}
    </div>
  );
}

export default App;
