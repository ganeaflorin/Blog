import { useState } from "react";

function Home() {
  const [name, setName] = useState("Flo");
  const handleClick = () => {
    setName("Flominisomo");
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;
