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
const ProfileWrapper = styled.div`
width: 400px; 
height: 400px;

`

const Profile = ({}) => {
    return ( 
      <ProfileWrapper>
        <div className="description">
            <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            className="avatar"
            />
            <p className="name">Petra Marica</p>
            <p className="tag">@pmarica</p>
            <p className="location">Salvador, Brasil</p>
        </div>

        <ul className="stats">
            <li>
            <span className="label">Followers</span>
            <span className="quantity">1000</span>
            </li>
            <li>
            <span className="label">Views</span>
            <span className="quantity">2000</span>
            </li>
            <li>
            <span className="label">Likes</span>
            <span className="quantity">3000</span>
            </li>
        </ul>
</ProfileWrapper>
     );
}
 
export default Profile;