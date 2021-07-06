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
      <h2>User Name:<span>{user.name}</span></h2>
      <h4>Post of the user</h4>:
      {postList.map((post) => {
        return <p>Title:{post.title}</p>
      })}
    </div>
  );
};

export default UserPage

