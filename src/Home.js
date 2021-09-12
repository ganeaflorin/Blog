import PostList from "./PostList";
import Loading from "./Loading";
import useFetch from "./useFetch";
// import { useEffect, useState } from "react";
function Home() {
  //function to update the height based on the number of posts
  function updatePostContainerHeight() {
    const noPosts = posts.length;
    const postHeight = 30;
    const height = 20 + (noPosts / 3) * (postHeight + 20);
    document.documentElement.style.setProperty(
      "--postsContainerHeight",
      `${height}em`
    );
    return true;
  }
  const URL = "http://localhost:8359/posts";
  const { data: posts, isLoading, error } = useFetch(URL);

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <Loading />}
      {posts && updatePostContainerHeight() && <PostList posts={posts} />}
    </div>
  );
}

export default Home;
