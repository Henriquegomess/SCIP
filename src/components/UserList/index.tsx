import React, {Fragment } from 'react';
import { User } from '../../pages/Register';

interface UserListProps {
    items: User[];
};

const UserList: React.FC<UserListProps> = (props) => {
    return (
        <Fragment>
            <ul>
            {props.items.map(user => (
                <li key={user.id}>
                    <span>{user.nome}</span>
                </li>
            ))}
            </ul>
        </Fragment>
    );
};

export default UserList;