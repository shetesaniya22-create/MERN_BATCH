import "./Testimonial.css";

function Testimonial({ name, photo, comments }) {
  return (
    <div className="testimonial-card">
      <img src={photo} alt={name} className="testimonial-photo" />
      <h3>{name}</h3>
      <p>{comments}</p>
    </div>
  );
}

export default Testimonial;
