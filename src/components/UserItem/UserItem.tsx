import { memo } from 'react';
import type { UserType } from '../../types/types';
import css from './UserItem.module.css';
interface Props {
  item: UserType;
  isActive: boolean;
  toggle30Plus: boolean;
  onUserClick: (id: UserType['id']) => void;
}

export const UserItem = memo(
  ({ item, isActive, onUserClick, toggle30Plus }: Props) => {
    const isHiglited = isActive || (toggle30Plus && item.age >= 30);

    console.log('render user the item component');

    return (
      <div
        className={`${css.cardContainer} ${isHiglited ? css.active : css.notActive}`}
        onClick={() => onUserClick(item.id)}
      >
        <h3>Name: {item.name}</h3>
        <p>Id: {item.id}</p>
        <p>Age: {item.age}</p>
      </div>
    );
  },
);
