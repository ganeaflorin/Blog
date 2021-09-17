// import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import Loading from "../Loading";
function UpdateForm(props) {
  const { data: posts, isLoading, error } = props.fetchData;
  const [blogToUpdate, setBlogToUpdate] = useState(null);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [article, setArticle] = useState("");
  const handleUpdate = () => {
    const blogId = document.getElementById("update-blog").value;
    posts.forEach((blog) => {
      if (blog.id === Number(blogId)) setBlogToUpdate(blog);
    });
  };
  useEffect(() => {
    if (blogToUpdate) {
      setTitle(blogToUpdate.title);
      setAuthor(blogToUpdate.author);
      setImage(blogToUpdate.author);
      setArticle(blogToUpdate.article);
    }
  }, [blogToUpdate]);
  return (
    <div>
      {error && <div> {error} </div>}
      {isLoading && <Loading />}
      {posts && (
        <label>
          Alege un blog:
          <select
            id="update-blog"
            name="update-blog"
            onChange={(e) => {
              handleUpdate(e);
            }}
          >
            <option value={""} key={-1}>
              Alege...
            </option>
            {posts.map((blog) => {
              return (
                <option value={blog.id} key={blog.id}>
                  {blog.title}
                </option>
              );
            })}
          </select>
        </label>
      )}
      {blogToUpdate && (
        <div id="update-form">
          <label>
            Titlul cartii
            <input
              type="text"
              required
              name="update-title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                // blogToUpdate.title = e.target.value;
                // setBlogToUpdate(blogToUpdate);
              }}
            ></input>
          </label>
          <label>
            Imagine
            <input
              type="text"
              required
              name="update-image"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
                // blogToUpdate.image = e.target.value;
                // setBlogToUpdate(blogToUpdate);
              }}
            ></input>
          </label>
          <label>
            Autor
            <input
              type="text"
              required
              name="update-author"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
                // blogToUpdate.author = e.target.value;
                // setBlogToUpdate(blogToUpdate);
              }}
            ></input>
          </label>
          <label>
            Articol
            <input
              type="textarea"
              required
              name="update-article"
              value={article}
              onChange={(e) => {
                setArticle(e.target.value);
                // blogToUpdate.article = e.target.value;
                // setBlogToUpdate(blogToUpdate);
              }}
            ></input>
          </label>
        </div>
      )}
    </div>
  );
}

export default UpdateForm;
