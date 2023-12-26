import styled from "styled-components";
type ProfileProps = { 
    username: String, 
    tag: String,
    location: String,
    avatar: String,
    stats: {
        followers: Number,
        views: Number,
        likes: Number
    }
}
const Profile = ({}) => {
    return (
        <ProfileWrapper>
            <Description >
                <Avatar
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar"
                />
                <Name>Petra Marica</Name>
                <SubText >@pmarica</SubText>
                <SubText >Salvador, Brasil</SubText>
            </Description>
            <Statistic>
                <StatItem>
                    <span >Followers</span>
                    <Quantity >1000</Quantity>
                </StatItem>
                <StatItem>
                    <span >Views</span>
                    <Quantity >2000</Quantity>
                </StatItem>
                <StatItem>
                    <span >Likes</span>
                    <Quantity >3000</Quantity>
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
`

export default Profile;