import React, { useState, useEffect } from 'react';
import UserController from './UserController';

export type resultProps = {
    name: {
      title: String,
      first: String,
      last: String
    }
    email: String
    phone: String
    picture: {
      large: String,
      thumbnail: String
    }
    registered: {
      date: String,
      age: String
    }
};

function UserContainer() {
    const [result, setResult] = useState<resultProps[]>([]);
  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://randomuser.me/api/?results=10&&inc=name,email,phone,picture,registered", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData.results);
    };
    api();
  }, []);
    
    
    return (
        <UserController 
            data={result}
        />
    )
}
 
export default UserContainer;