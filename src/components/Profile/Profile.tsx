import styled from "styled-components";
import {prettyNumbers} from "../../utils/prettyNumbers";
type ProfileProps = { 
    username: string,
    tag: string,
    location: string,
    avatar: string,
    stats: {
        followers: number,
        views: number,
        likes: number
    }
}
const Profile = ({username, avatar, tag, location, stats}:ProfileProps) => {
    return (
        <ProfileWrapper>
            <Description >
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <Name>{username}</Name>
                <SubText >@{tag}</SubText>
                <SubText >{location}</SubText>
            </Description>
            <Statistic>
                <StatItem>
                    <span >Followers</span>
                    <Quantity>{prettyNumbers(stats.followers)}</Quantity>
                </StatItem>
                <StatItem>
                    <span >Views</span>
                    <Quantity>{prettyNumbers(stats.views)}</Quantity>
                </StatItem>
                <StatItem>
                    <span >Likes</span>
                    <Quantity>{prettyNumbers(stats.likes)}</Quantity>
                </StatItem>
            </Statistic>
        </ProfileWrapper>
    );
}
const ProfileWrapper = styled.div`
    width: 400px;
    height: 400px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Description = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
const Avatar = styled.img`
    border-radius: 50%;
    width: 90px;
    height: 90px;
`
const Name = styled.p`
    font-size: 25px;
    font-weight: bold;
`
const SubText = styled.p`
    color: grey;
    margin: 0.5rem;
`
const Statistic = styled.ul`
    width: 100%;
    display: flex;
    flex: 1;
    background: lightgray;
    margin: 0;
    padding: 0;
    & :last-child{
        border-right: none;
    }
`
const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33.3%;
    align-items: center;
    justify-content: center;
    border-top: 1px solid grey;
    border-right: 1px solid grey;
    border-bottom: none;
`
const Quantity = styled.span`
   font-size: 18px;
    padding-top: 5px;
    font-weight: bold;
    font-variant-numeric: lining-nums; /* Use lining numbers */
    font-feature-settings: 'lnum';
`

export default Profile;