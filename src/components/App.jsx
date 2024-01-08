import "./App.module.css";
import userData from "../helpers/userData.json";
import friends from "../helpers/friends.json";
import transactions from "../helpers/transactions.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
