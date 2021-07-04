import React, { useState, useEffect } from "react";

const CommentPage = ({ postId }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCommentList(data);
      });
  }, []);

  return (
    <React.Fragment>
      {commentList.map((comments) => {
        return <p>{comments.name}</p>;
      })}
    </React.Fragment>
  );
};

export default CommentPage;
