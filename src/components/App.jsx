import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { GlobalStyle } from "./GlobalStyle";
import user from "./Data/user.json";
import data from "./Data/data.json";
import friends from "./Data/friends.json";
import transactions from "./Data/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" statistics={data} />
      <FriendList items={friends} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle/>
    </div>
  );
};