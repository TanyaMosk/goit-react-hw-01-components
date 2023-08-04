import {Table,Tbody,Thead } from "./TransactionHistory.styled"

export const TransactionHistory = ({transactions}) => {
    // console.log(transactions);
    return (
 <Table>
   <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Thead>
      {transactions.map(({id,type,amount,currency}) => (
    <Tbody key={id}>
    <tr>
        <td>{type[0].toUpperCase()+type.substring(1)}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>    
  </Tbody>
    ))}  
</Table>
)}