import PostList from "./PostList";
import Loading from "./Loading";
function Home(props) {
  const { data: posts, isLoading, error } = props.fetchData;
  console.log(posts);
  //function to update the height based on the number of posts
  function updatePostContainerHeight() {
    const noPosts = posts.length;
    const postHeight = 30;
    const height = 20 + (noPosts / 3) * (postHeight + 20);
    document.documentElement.style.setProperty(
      "--postsContainerHeight",
      `${height}em`
    );
    console.log(posts);
    return true;
  }
  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <Loading />}
      {posts && updatePostContainerHeight() && <PostList posts={posts} />}
    </div>
  );
}

export default Home;
