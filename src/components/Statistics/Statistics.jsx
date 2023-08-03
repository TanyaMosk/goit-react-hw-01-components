// import {Section,StatList,ListItem} from './Statistics.styled'

export const Statistics = ({ statistics }) => {
    // console.log(statistics); 
    
    return (
  <section>
  <h2 className="title">Upload stats</h2>

    <ul>
        {statistics.map(({ id, label, percentage }) => (
    <li className="item" key={id} color={label}>
      <span className="label">{label} </span>
      <span className="percentage">{percentage}%</span>
    </li>   
    ))}      
  </ul>
 </section>
);

}