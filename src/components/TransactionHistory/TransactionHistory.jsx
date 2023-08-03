export const TransactionHistory = ({transactions}) => {
    // console.log(transactions);
    return (
 <table className="transaction-history">
   <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
      {transactions.map(({id,type,amount,currency}) => (
    <tbody key={id}>
    <tr >
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>    
  </tbody>
    ))}  
</table>
)}