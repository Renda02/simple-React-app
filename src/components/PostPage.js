import React, {useEffect, useState} from "react";
import CommentList from "./CommentList";
import { useParams } from "react-router";

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
    <div>
        <h1>{post.title}</h1>
      <CommentList postId={post.id} />
    </div>
  );
};
