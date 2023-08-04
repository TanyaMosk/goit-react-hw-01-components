import { BsFillCircleFill } from "react-icons/bs";
import { Icon, ListItem } from "./Friends.styled";

export const FriendList = ({items}) => {
    
  return (
   <ul>
    {items.map(({ avatar, name, isOnline, id }) => (   
            
  <ListItem key={id} >
    <Icon >                 
      <BsFillCircleFill status={`${isOnline}`} />
      </Icon>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
  </ListItem>))}         
  </ul>
)}