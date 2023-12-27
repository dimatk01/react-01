import styled from "styled-components";
import React from "react";

type FriendItemProps = {
    avatar: string;
    name: string;
    isOnline: boolean;
};
const FriendListItem: React.FC<FriendItemProps> = ({avatar, name,isOnline})=>{
    return (
        <Item className="item">
            <Status isonline={isOnline}></Status>
            <Avatar  src={avatar} alt="User avatar" width="48"/>
            <p>{name}</p>
        </Item>
    )
}

const Item = styled.li`
    width: 400px;
    height: 50px;
    border: solid  1px grey;
    box-shadow: lightslategray;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Status = styled.span<StyledComponentProps>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(props)=>{
       return props?.isonline ? "green": "red"
    }}
`
const Avatar = styled.img`
    border-radius: 50%;
`
interface StyledComponentProps {
    isonline: boolean;
}
export default FriendListItem;