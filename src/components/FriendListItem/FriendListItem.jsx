import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="item">
      <img className="avatar" src={avatar} alt="Avatar" width="48" />
      <p className="name">{name}</p>
      <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
    </div>
  );
};
