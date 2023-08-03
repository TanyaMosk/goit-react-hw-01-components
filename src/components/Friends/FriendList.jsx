import { FriendListItem } from "./FriendListItem"
import friends from "./friends.json"

export const FriendList = () => {
    
    return (
        <ul className="friend-list">
         <FriendListItem items={friends}/>
        </ul>
    )
}