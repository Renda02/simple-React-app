import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";

export const UserPage = () => {
  const { userId } = useParams();
   const [postList,setPostList] = useState([]);
   const [user,setUser] = useState({});

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
  }, []);

  return (
    <div>
      <h2>User Name:{user.name}</h2>
      <h1>Post of the user</h1>
      {postList.map((post) => {
        return <h4>Title:{post.title}</h4>
      })}
    </div>
  );
};

export default UserPage
