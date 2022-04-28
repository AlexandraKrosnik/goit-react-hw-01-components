import s from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem"

function FriendList({friends}) {
    return (
        <ul className={s.friend_list}>
            {friends.map(friend => {
                return (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                )
           })}
        </ul>
    )
}

export default FriendList;