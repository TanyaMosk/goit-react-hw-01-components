// import { Container,Descript,Image,Paragraph,Stats,List } from "./Profile.styled";


export const Profile = ({ userData }) => {
    // console.log(userData);
    const { username, tag, location, avatar, stats } = userData;
    
    return (
<div >
  <divt >
    <img
      src={avatar}
      alt={username}
            className="avatar" 
      width={100}      
    />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
  </divt>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views }</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
);
};