import Loading from "../Loading";
function DeleteForm(props) {
  const { data: posts, isLoading, error } = props.fetchData;
  return (
    <div>
      {error && <div> {error} </div>}
      {isLoading && <Loading />}
      {posts && (
        <label>
          Alege un blog:
          <select id="delete-blog" name="delete-blog">
            <option value={""} key={-1}>
              Alege...
            </option>
            {posts.map((blog) => {
              return (
                <option value={blog.id} key={blog.id}>
                  {" "}
                  {blog.title}
                </option>
              );
            })}
          </select>
        </label>
      )}
    </div>
  );
}

export default DeleteForm;
