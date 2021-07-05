import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CommentPage = ({ postId }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "comment data");
        setCommentList(data);
      });
  }, []);

  return (
    <React.Fragment>
      {commentList.length !== 0 && <h3>Post Comments</h3>}
      {commentList.map((comments) => {
        return <p>{comments.name}</p>;
      })}
    </React.Fragment>
  );
};

export default CommentPage;
