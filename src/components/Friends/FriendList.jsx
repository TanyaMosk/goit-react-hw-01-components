import { FriendListItem } from "./FriendListItem"
import friends from "./friends.json"

export const FriendList = () => {
    
    return (
        <ul>
         <FriendListItem items={friends}/>
        </ul>
    )
}