import Navbar from "./Navbar";
import Home from "./Home";
import BlogManager from "./BlogManager";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./Blog";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/manager">
              <BlogManager />
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
