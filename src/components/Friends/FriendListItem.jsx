import { BsFillCircleFill } from "react-icons/bs";
import { Icon, List } from "./Friends.styled";

export const FriendListItem = ({ items }) => {
    // console.log(items)
    return (
     items.map(({ avatar, name, isOnline, id }) => (
         <List className="item" key={id}  >
             <Icon className="status">                 
                 <BsFillCircleFill status={`${isOnline}`} />
             </Icon>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </List> 
    ))
)}