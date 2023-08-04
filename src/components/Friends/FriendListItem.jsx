import { BsFillCircleFill } from "react-icons/bs";
import { Icon, List } from "./Friends.styled";

export const FriendListItem = ({ items }) => {
    // console.log(items)
    return (
     items.map(({ avatar, name, isOnline, id }) => (
         <List key={id}  >
             <Icon >                 
                 <BsFillCircleFill status={`${isOnline}`} />
             </Icon>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </List> 
    ))
)}