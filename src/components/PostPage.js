import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { useParams } from "react-router";
import styled from "styled-components";

export const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);

  return (
    <>
      <PostPageTitle>{post.title}</PostPageTitle>
      <PostComment>
        <CommentList postId={post.id} />
      </PostComment>
    </>
  );
};

const PostPageTitle = styled.h4`
  margin-bottom: 2em;
  text-align: center;
  color: #27b08e;
`;

const PostComment = styled.div`
  margin-bottom: 2em;
  border-radius: 15px;
align-items:flex;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
