import type { UserType } from '../../types/types';
import css from './UserItem.module.css';
interface Props {
  item: UserType;
}
export const UserItem = ({ item }: Props) => {
  return (
    <li className={css.cardContainer}>
      <h3>Name: {item.name}</h3>
      <p>Id: {item.id}</p>
      <p>Age: {item.age}</p>
    </li>
  );
};
