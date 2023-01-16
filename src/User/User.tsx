import React from "react";
import UserList from "../Components/UserList";
import {UserObj} from "./UserController";

interface UserProps{
    users: UserObj[]
}

const User = ({
    users
} : UserProps) => {
    return(
        <div className="container text-center">
            <div className="row">
                <div className="col-1"></div>
                <div className = "col-10">
                    <UserList 
                        users={users}
                    />
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
    }

export default User;