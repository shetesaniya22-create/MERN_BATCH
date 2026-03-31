import "./BlogCard.css";
function BlogCard({ title, summary, author, children }) {
  return (
    <div className="blog-container">
      <h2>{title}</h2>
      <p>{summary}</p>
      <p>{author}</p>
      {children}
    </div>
  );
}

export default BlogCard;
