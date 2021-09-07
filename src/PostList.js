function PostList(props) {
  const posts = props.posts;
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h1 className="post__title">{post.title}</h1>
          <h5 className="post__date">{post.date} </h5>
          <p className="post__article">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
export default PostList;
