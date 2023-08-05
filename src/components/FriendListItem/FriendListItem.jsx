import PropTypes from 'prop-types'; 
import { BsFillCircleFill } from "react-icons/bs";
import { Icon, ListItem } from "./FriendListItem.styled";


export const FriendListItem = ({ name,status, avatar }) => {
   
    return (
  <ListItem>
    <Icon >                 
      <BsFillCircleFill status={`${status}`} />
    </Icon>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
  </ListItem>
)}

FriendListItem.propTypes = {  
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,      
}