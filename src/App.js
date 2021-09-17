import Navbar from "./Navbar";
import Home from "./Home";
import BlogManager from "./BlogManager";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./Blog";
import useFetch from "./useFetch";
function App() {
  const URL = "http://localhost:8359/posts/";
  const fetchData = useFetch(URL);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home fetchData={fetchData} />
            </Route>
            <Route path="/manager">
              <BlogManager fetchData={fetchData} URL={URL} />
            </Route>
            <Route path="/blogs/:id">
              <Blog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
