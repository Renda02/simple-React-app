import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";


export const UserPage = () => {
  const { userId } = useParams();
  const [postList, setPostList] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPostList(data);
      });
  }, [userId]);

  return (
    <>
      <UserTitle>
        User Name:<span>{user.name}</span>
      </UserTitle>
      <UserSubTitle>Post of the user</UserSubTitle>
      {postList.map((post) => {
        return <PostUser>Title:{post.title}</PostUser>;
      })}
    </>
  );
};

export default UserPage;

const PostUser = styled.p`
  background: #343434;
  color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  font-family: "Open Sans", sans-serif;
  padding: 1.7rem 1.5rem;
  width: 450px;
  border-radius: 8px;
  box-shadow: 5px 5px 15px rgb(255 255 255 / 3%);
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color: #343434;
  }
`;

const UserTitle = styled.h5`
  margin-bottom: 2em;
  text-align: center;
  color: #27b08e;
`;

const UserSubTitle = styled.h6`
  margin-bottom: 2em;
  text-align: center;
  color: #27b08e;
`;
