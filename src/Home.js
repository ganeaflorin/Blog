// import { useState } from "react";
import PostList from "./PostList";
import './home.css';
import Loading from "./Loading";
import { useEffect, useState } from "react";
function Home() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //function to update the height based on the number of posts
  function updatePostContainerHeight() {
    let noPosts = posts.length;
    let postHeight = 30;
    // let postHeight = document.getElementsByClassName("post")[0].getBoundingClientRect().height;
    let height = 20 + noPosts/3 * (postHeight + 20);
    document.documentElement.style.setProperty("--postsContainerHeight", `${height}em`);
    return true;
  }

  //fetch request to get the json data
  //using timeout just to show off loading component, wouldn't normally use it here
  useEffect(() => {
    setTimeout(() =>{fetch('http://localhost:8359/posts')
    .then(res => {
      if(!res.ok){
        throw Error('Could not fetch the data.');
      }
      return res.json();
    })
    .then(data => {
      setPosts(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(err => {
      setIsLoading(false);
      setError(err.message);
    })
  }, 1250)});

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <Loading />}
      {posts && updatePostContainerHeight() && <PostList posts={posts}/>}
    </div>
  );
}

export default Home;
