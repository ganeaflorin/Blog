import { Link } from "react-router-dom";
import "./styles/posts.css";
function PostList(props) {
  const posts = props.posts;
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h5 className="post__date">{post.date} </h5>
          <div className="book__infos">
            <h1 className="post__title">{post.title}</h1>
            <img
              className="post__image"
              src={post.image}
              alt="book cover"
            ></img>
            <h3 className="post__author">{post.author}</h3>
          </div>
          <p className="post__article">{post.article}</p>
          <Link className="post__button" to={`/blogs/${post.id}`}>
            CITEȘTE MAI MULT
          </Link>
        </div>
      ))}
    </div>
  );
}
export default PostList;
