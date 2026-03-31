import "./User.css";
function User({ name, bio, children }) {
  return (
    <div className="user-card">
      <h3 id="name">{name}</h3>
      <h6 id="bio">{bio}</h6>
      {children}
    </div>
  );
}

export default User;
