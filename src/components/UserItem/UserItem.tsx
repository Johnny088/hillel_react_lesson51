import { memo, useState } from 'react';
import type { UserType } from '../../types/types';
import css from './UserItem.module.css';
interface Props {
  item: UserType;
  toggle30Plus: boolean;
}

export const UserItem = memo(({ item, toggle30Plus }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const onUserClick = () => {
    setIsActive(prev => !prev);
  };

  const highlited = isActive || (toggle30Plus && item.age >= 30);
  return (
    <div
      className={`${css.cardContainer} ${highlited ? css.active : css.notActive}`}
      onClick={() => onUserClick()}
    >
      <h3>Name: {item.name}</h3>
      <p>Id: {item.id}</p>
      <p>Age: {item.age}</p>
    </div>
  );
});

// import { memo } from 'react';
// import type { UserType } from '../../types/types';
// import css from './UserItem.module.css';
// interface Props {
//   item: UserType;
//   isActive: boolean;
//   onUserClick: (id: UserType['id']) => void;
// }

// export const UserItem = memo(({ item, isActive, onUserClick }: Props) => {
//   console.log(`Render user item ${item.name}`);

//   return (
//     <div
//       className={`${css.cardContainer} ${isActive ? css.active : css.notActive}`}
//       onClick={() => onUserClick(item.id)}
//     >
//       <h3>Name: {item.name}</h3>
//       <p>Id: {item.id}</p>
//       <p>Age: {item.age}</p>
//     </div>
//   );
// });
