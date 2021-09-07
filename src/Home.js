import { useState } from "react";
import PostList from "./PostList";
function Home() {
  const film = {
    id: 0,
    type: "film",
    title: "The Godfather",
    date: "07 September 2021",
    img: "placeholder",
    body: "very good movie",
  };
  const carte = {
    id: 1,
    type: "carte",
    title: "Anna Karenina",
    date: "07 September 2021",
    img: "placeholder",
    body: "very good book",
  };
  const carte1 = {
    id: 2,
    type: "carte",
    title: "Anna Karenina",
    date: "07 September 2021",
    img: "placeholder",
    body: "very good book",
  };
  const carte2 = {
    id: 3,
    type: "carte",
    title: "Anna Karenina",
    date: "07 September 2021",
    img: "placeholder",
    body: "very good book",
  };
  const carte3 = {
    id: 4,
    type: "carte",
    title: "Anna Karenina",
    date: "07 September 2021",
    img: "placeholder",
    body: "very good book",
  };
  const carte4 = {
    id: 5,
    type: "carte",
    title: "Anna Karenina",
    date: "07 September 2021",
    img: "placeholder",
    body: "very good book",
  };
  const mockPosts = [film, carte, carte1, carte2, carte3, carte4];
  // const [posts, updatePosts] = useState(mockPosts);
  return (
    <div className="home">
      <PostList posts={mockPosts} coco="bobo" />
    </div>
  );
}

export default Home;
