import { useCallback, useMemo, useState } from 'react';
import type { UserType } from '../../types/types';
import { UsersData } from '../UsersData/UsersData';
import { UserItem } from '../UserItem/UserItem';
import css from './UserList.module.css';
import { SearchForm } from '../SearchForm/SearchForm';
export const UserList = () => {
  const [users] = useState<UserType[]>(UsersData);

  const [sortOrder, setSortOrder] = useState<'name' | 'age'>('name');

  const [searchKey, setSearchKey] = useState('');

  // const [isActive, setIsActive] = useState(false);

  const [highlight30Plus, setHighlight30Plus] = useState(false);

  const commonUsers = useMemo(() => {
    const filteredUsers: UserType[] =
      searchKey === ''
        ? [...users]
        : users.filter(user =>
            user.name.toLowerCase().includes(searchKey.toLowerCase()),
          );

    const sortedUsers: UserType[] =
      sortOrder === 'name'
        ? filteredUsers.toSorted((a, b) => a.name.localeCompare(b.name))
        : filteredUsers.toSorted((a, b) => a.age - b.age);
    return sortedUsers;
  }, [users, searchKey, sortOrder]);

  const searchHandler = (search: string, value: 'name' | 'age') => {
    setSearchKey(search);
    setSortOrder(value);
  };

  const toggle30Plus = useCallback(() => {
    setHighlight30Plus(prev => !prev);
  }, []);

  // const onUserClick = (id: UserType['id']) => {};

  return (
    <>
      <SearchForm onSubmit={searchHandler} />
      <button className={css.toggle30} onClick={toggle30Plus}>
        Toggle highlight 30+
      </button>

      {commonUsers.length === 0 ? (
        <h2>Nothing was found</h2>
      ) : (
        <ul className={css.usersContainer}>
          {commonUsers.map(user => (
            <li key={user.id}>
              <UserItem item={user} toggle30Plus={highlight30Plus} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
