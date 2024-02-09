import React, {useEffect, useState} from 'react';

import UsersForm from "./UsersForm";
import {userService} from "../services/userService";
import Users from "./Users";

const UsersContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <div><UsersForm setUsers={setUsers}/></div>
            <hr/>
            <div><Users users={users}/></div>
        </div>
    );
};

export default UsersContainer;