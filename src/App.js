import Navbar from "./Navbar";
import Home from "./Home";
import BlogManager from "./BlogManager";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
