import React, { useState, useEffect } from "react";
import styled from "styled-components";



const CommentPage = ({ postId }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data, "comment data");
        setCommentList(data);
      });
  }, []);

  return (
    <div>
      {commentList.length !== 0 && <CommentTitle>Post Comments</CommentTitle>}
      
      {commentList.map((comments) => {
        return <CommentName>{comments.name}</CommentName>;
      })}
    </div>
  );
};

export default CommentPage;

const CommentName = styled.p`
margin:0;
 text-align:center;
`;

const CommentTitle = styled.h5`
line-height:5px;
 text-align:center;
`;






