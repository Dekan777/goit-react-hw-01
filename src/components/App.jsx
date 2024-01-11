import './App.module.css';
import userData from '../data/userData.json';

import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile user={userData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};
