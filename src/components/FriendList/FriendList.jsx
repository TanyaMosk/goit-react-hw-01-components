import PropTypes from 'prop-types'; 

import { List } from "./FriendList.styled";
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    
  return (
  <List>
    {friends.map(({name,avatar,id,isOnline}) => (   
      < FriendListItem
        key={id}
        name={name}
        avatar={avatar}
        status={isOnline} />  
    ))}         
  </List>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool,
    id: PropTypes.number.isRequired
  }),
  )
}
