import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { PostPage } from "./components/PostPage";

import PostList from "./components/PostList";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/users/:userId">
            <UserPage />
          </Route>
          <Route path="/posts/:postId">
            <PostPage />
          </Route>
          <Route path="/">
            <PostList />
          </Route>
        </Switch>
      </Router>{" "}
    </div>
  );
}

export default App;
