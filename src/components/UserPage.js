import React, {useEffect, useState} from 'react';

export const UserPage = ({postId}) => {
   const [userList,setUserList] = useState([]);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${postId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserList(data);
      });
  }, []);

  return (
    <div>
      {userList.map((users) => {
        return <p>{users.name}</p>;
      })}
    </div>
  );
};

