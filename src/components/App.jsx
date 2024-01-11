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
      <ul>
        <li>
          <Profile user={userData} />
        </li>
        <li>
          <FriendList friends={friends} />
        </li>
        <li>
          <TransactionHistory items={transactions} />
        </li>
      </ul>
    </>
  );
};
