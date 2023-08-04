import {Table,Tbody,Thead, TrLine } from "./TransactionHistory.styled"

export const TransactionHistory = ({transactions}) => {    
    return (
 <Table>
   <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Thead>
      
  <Tbody >
    {transactions.map(({id,type,amount,currency}) => (
    <TrLine key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TrLine>
    ))}    
  </Tbody>
     
</Table>
)}