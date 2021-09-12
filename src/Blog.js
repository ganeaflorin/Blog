import { useParams } from "react-router-dom";
import Loading from "./Loading";
import useFetch from "./useFetch";

function Blog() {
  const URL = "http://localhost:8359/posts/";
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(URL + `${id}`);
  return (
    <div className="blog">
      {isLoading && <Loading />}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Writen by:{blog.author}</p>
          <div> {blog.article}</div>
        </article>
      )}
    </div>
  );
}

export default Blog;
