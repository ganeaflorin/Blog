import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  return (
    <div class="blog">
      <h1>Blog - {id}</h1>
    </div>
  );
}

export default Blog;
