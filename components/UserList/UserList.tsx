import React, { memo } from 'react';
import styles from './UserList.module.css';
import { User } from '../../model/types';
import UserInfoBlock from '../UserInfoBlock/UserInfoBlock';

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => {
    return <div className={styles.container}>
        {users.map((user: User) => (
            <UserInfoBlock key={user.id.value} user={user} />
        ))}
    </div>;
}

export default memo(UserList);
