import PostList from "./PostList";
import "./home.css";
import Loading from "./Loading";
import useFetch from "./useFetch";
// import { useEffect, useState } from "react";
function Home() {
  //function to update the height based on the number of posts
  function updatePostContainerHeight() {
    let noPosts = posts.length;
    let postHeight = 30;
    // let postHeight = document.getElementsByClassName("post")[0].getBoundingClientRect().height;
    let height = 20 + (noPosts / 3) * (postHeight + 20);
    document.documentElement.style.setProperty(
      "--postsContainerHeight",
      `${height}em`
    );
    return true;
  }

  const { data: posts, isLoading, error } = useFetch(
    "http://localhost:8359/posts"
  );

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <Loading />}
      {posts && updatePostContainerHeight() && <PostList posts={posts} />}
    </div>
  );
}

export default Home;
