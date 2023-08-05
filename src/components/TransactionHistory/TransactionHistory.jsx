import PropTypes from 'prop-types'; 
import { Table, Tbody, Thead, TrLine, Type } from "./TransactionHistory.styled"

export const TransactionHistory = ({items}) => {    
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
    {items.map(({id,type,amount,currency}) => (
      <TrLine key={id}>
        <Type>{type}</Type>
        <td>{amount}</td>
        <td>{currency}</td>
      </TrLine>))}    
    </Tbody>     
  </Table>
)}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  )
}