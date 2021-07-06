import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { PostPage } from "./components/PostPage";
import UserPage from "./components/UserPage";
import PostList from "./components/PostList";
import NavBar from "./components/NavBar";
import React from "react";
import {GlobalStyle} from "./globalStyles"



function App() {
  
  return (
    <React.Fragment>
      <Router>
        <NavBar />
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
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;


