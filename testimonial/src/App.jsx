import "./App.css";
import Testimonial from "./Testimonial/Testimonial";
import Img from "./assets/Img.jpeg";

function App() {
  return (
    <>
      <Testimonial
        name="Saniya"
        photo={Img}
        comments="Your progress is very good"
      ></Testimonial>
    </>
  );
}

export default App;
