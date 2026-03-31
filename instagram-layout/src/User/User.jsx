import "./User.css";

function User({ name, bio, photo, children }) {
  return (
    <div className="container">
      <div className="user-card">
        <img src={photo} alt={name} className="user-photo" />
        <h3>{name}</h3>
        <p>{bio}</p>
        {children}
      </div>
    </div>
  );
}

export default User;
