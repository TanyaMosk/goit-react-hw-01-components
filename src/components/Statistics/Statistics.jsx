import PropTypes from 'prop-types'; 
import { Section, StatList, ListItem } from "./Statistics.styled"

export const Statistics = ({ stats,title }) => {
      
  return (
  <Section>  
          
      {title && <h2 title={title}>{title}</h2>}

    <StatList>
        {stats.map(({ id, label, percentage }) => (
      <ListItem  key={id} color={label}>
        <span >{label} </span>
        <span >{percentage}%</span>
      </ListItem>))}      
    </StatList>
  </Section>
);
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({    
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,    
    percentage: PropTypes.number.isRequired
  }),
  )
}