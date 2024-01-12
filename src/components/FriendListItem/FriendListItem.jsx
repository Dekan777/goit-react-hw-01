import css from './FriendListItem.module.css';
// import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  // const statusClass = clsx(css.status, {
  //   [css.online]: isOnline,
  //   [css.offline]: !isOnline,
  // });
  const statusClass = isOnline ? css.online : css.offline;
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="80" />
      <p className={css.name}>{name}</p>
      <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
