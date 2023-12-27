import FriendListItem from "../FriendListItem/FriendListItem";
import React from "react";

 type Friend = {
    avatar: string;
    name: string;
    isOnline: boolean;
    id: number;
};
type FriendlyListProps ={
    friends: Array<Friend>
}
const FriendList: React.FC<FriendlyListProps> = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(({id, name, isOnline,avatar})=>(
                <FriendListItem isOnline={isOnline} name={name} avatar={avatar} key={id}/>
            ))}
        </ul>
    )
}
export default FriendList