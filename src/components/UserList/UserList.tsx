import { useState } from 'react';
import type { UserType } from '../../types/types';
import { UsersData } from '../UsersData/UsersData';
import { UserItem } from '../UserItem/UserItem';
import css from './UserList.module.css';
export const UserList = () => {
  const [users, setusers] = useState<UserType[]>(UsersData);

  return (
    <ul className={css.usersContainer}>
      {users.map(user => (
        <UserItem item={user} />
      ))}
    </ul>
  );
};
