import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PostList />
        </Switch>
      </Router>{" "}
    </div>
  );
}

export default App;
