import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    <PostWrapper>
      {postList.map((post) => {
        return (
          <PostCard>
            <PostLink to={"/posts/" + post.id}>
              <PostLink to={"/users/" + post.userId}>
               <UserTitle>User: {post.userId}</UserTitle> 
              </PostLink>
              <hr/>
              <PostTitle>Title: <Span>{post.title}</Span></PostTitle>
            </PostLink>
          </PostCard>
        );
      })}
    </PostWrapper>
  );
};

export default PostList;

const PostWrapper = styled.div`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

const PostCard = styled.div`
  background: #343434;
  color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
  padding: 1.7rem 1.5rem;
  width: 250px;
  border-radius: 8px;
  box-shadow: 5px 5px 15px rgb(255 255 255 / 3%);
  cursor:pointer;   transition: all 0.3s ease-out;

  
`;

const PostLink = styled(Link)`
  text-decoration: none;
  color:#fff;
  padding:0.3em;

    }
`;

const PostTitle = styled.h5`
margin: .5em 0 0;
line-heght: 5px;

&:hover {
  color: #42BD6D;
  }
`;

const UserTitle = styled.div`
margin: .5em 0 0;
line-heght: 5px;

&:hover {
  color: #42CD62;
  }
`;





const Span = styled.span`
  font-weight:300;
  letter-spacing:0.1px;
`;

