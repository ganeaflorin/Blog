import useFetch from "../useFetch";

function DeleteForm() {
  const URL = "http://localhost:8359/posts";
  const { data: posts, isLoading, error } = useFetch(URL);
  return (
    <div>
      {posts && (
        <label>
          Alege un blog:
          <select name="choose blog">
            {posts.map((blog) => {
              return <option value={blog.title}> {blog.title}</option>;
            })}
          </select>{" "}
        </label>
      )}
    </div>
  );
}

export default DeleteForm;
