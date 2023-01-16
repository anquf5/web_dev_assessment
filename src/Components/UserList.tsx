import React, { useState } from 'react';
import { UserObj } from '../User/UserController';
import Detail from './Detail';

interface TableProps {
     users: UserObj[];
}

function UserList({users}: TableProps)  {
    const [selectedUser, setSelectedUser] = useState<UserObj>();
    const userMap = users.map((u) => {
        const img = `${u.photo_s}`
        return(
            <tbody>
                <td>
                    {u.name}
                </td>
                <td>
                    {u.email}
                </td>
                <td>{u.phone}</td>
                <td>
                    <img src={img}/>
                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-info"
                        onClick={() => {
                            setSelectedUser(u)
                        }}
                    >Show</button>
                </td>
            </tbody>
        )
    })

    if (selectedUser === undefined) {
        return (
            <table className='table align-middle'>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Show</th>
                    </tr>
                </thead>
                {userMap}
            </table>
        )
    }
    else return (
        <div>
            <Detail user={selectedUser}/>
            <table className='table align-middle'>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Show</th>
                    </tr>
                </thead>
                {userMap}
            </table>
        </div>
    );
}
 
export default UserList;

