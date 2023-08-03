import {Section,StatList,ListItem} from './Statistics.styled'

export const Statistics = ({ statistics }) => {
    // console.log(statistics);     
    return (
  <Section>
  <h2 className="title">Upload stats</h2>

    <StatList>
        {statistics.map(({ id, label, percentage }) => (
    <ListItem className="item" key={id} color={label}>
      <span className="label">{label} </span>
      <span className="percentage">{percentage}%</span>
    </ListItem>   
    ))}      
  </StatList>
 </Section>
);

}