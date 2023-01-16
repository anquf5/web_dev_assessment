import React from 'react';
import { resultProps } from './UserContainer';
import User from './User';

interface UserControllerProps {
    data: resultProps[]
}

export interface UserObj{
    name: String
    email: String
    phone: String
    photo_l: String
    photo_s: String
    reg: String
    age: String
}

const UserController = ({
    data
}:UserControllerProps) => {
    const users: UserObj[] = [];
    data.forEach((d) => {
        const user: UserObj = {
            name: d.name.title + " " + d.name.first + " " + d.name.last,
            email: d.email,
            phone: d.phone,
            photo_l: d.picture.large,
            photo_s: d.picture.thumbnail,
            reg: d.registered.date,
            age: d.registered.age
        }
        users.push(user);
    })    
    
    return (
        <User 
            users={users}
        />
    )
}
 
export default UserController;