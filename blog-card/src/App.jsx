import "./App.css";
import BlogCard from "./BlogCard";

function App() {
  return (
    <div className="app-container">
      <BlogCard
        title="React props explained"
        summary="Learn how props works in react"
        author="Saniya"
      >
        <a href="/blog/react-props">Read More</a>
      </BlogCard>

      <BlogCard title="DOM explained" summary="Learn DOM in JS" author="Swara">
        <a href="/blog/react-props">Read More</a>
      </BlogCard>
    </div>
  );
}

export default App;
