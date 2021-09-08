// import { useState } from "react";
import PostList from "./PostList";
import './home.css';
function Home() {
  function Book(title, author, img, date, article) {
    this.title = title;
    this.author = author;
    this.img = img;
    this.date = date;
    this.article = article;
  }
  let mockPosts = []; 
  for(let i = 0; i<10; i++) {
    mockPosts.push(new Book("Anna Karenina", "Lev Tolstoi", "https://humanitas.ro/assets/images/products/Anna-Karenina.jpg",
    "08 Septembrie 2021", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
  }

  // const [posts, updatePosts] = useState(mockPosts);
  function updatePostContainerHeight() {
    let noPosts = mockPosts.length;
    let postHeight = 30;
    // let postHeight = document.getElementsByClassName("post")[0].style.height;
    let height = 20 + noPosts/3 * (postHeight + 20);
    document.documentElement.style.setProperty("--postsContainerHeight", `${height}em`);
  }
  updatePostContainerHeight();
  return (
    <div className="home">
      <PostList posts={mockPosts} />
    </div>
  );
}

export default Home;
