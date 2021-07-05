import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data posts");
        setPostList(data);
      });
  }, []);

  return (
    <div className="wrapper">
      {postList.map((post) => {
        return (
          <div className="post-card">
            <Link to={"/posts/" + post.id}>
              <h4>Title:{post.title}</h4>
              <Link to={"/users/" + post.userId}>User: {post.userId}</Link>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
