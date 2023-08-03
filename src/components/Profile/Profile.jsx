import { Container,Descript,Image,Paragraph,Stats,List } from "./Profile.styled";

export const Profile = ({ userData }) => {
    // console.log(userData);
    const { username, tag, location, avatar, stats } = userData;
    
    return (
<Container >
  <Descript >
    <Image
      src={avatar}
      alt={username}
            className="avatar" 
      width={100}      
    />
      <Paragraph className="name">{username}</Paragraph>
      <Paragraph className="tag">{tag}</Paragraph>
      <Paragraph className="location">{location}</Paragraph>
  </Descript>

  <Stats className="stats">
    <List>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </List>
    <List>
      <span className="label">Views</span>
      <span className="quantity">{stats.views }</span>
    </List>
    <List>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </List>
  </Stats>
</Container>
);
};