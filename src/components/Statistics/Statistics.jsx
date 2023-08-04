import {Section,StatList,ListItem} from "./Statistics.styled"

export const Statistics = ({ statistics }) => {
    // console.log(statistics);     
    return (
  <Section>
  <h2 >Upload stats</h2>

    <StatList>
        {statistics.map(({ id, label, percentage }) => (
    <ListItem  key={id} color={label}>
      <span >{label} </span>
      <span >{percentage}%</span>
    </ListItem>   
    ))}      
  </StatList>
 </Section>
);

}