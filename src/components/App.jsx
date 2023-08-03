// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


import { Profile } from "./Profile/Profile"
import user from "./Profile/user.json"
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data.json"
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json"
import { GlobalStyle } from "./GlobalStyle";


export const App = () => {
  return (
    <div>
      <Profile userData={user} />
      <Statistics statistics={data} />
      <FriendList />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle/>
    </div>
  );
};