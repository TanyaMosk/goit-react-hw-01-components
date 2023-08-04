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
      width={100}      
    />
      <Paragraph className="name">{username}</Paragraph>
      <Paragraph >{tag}</Paragraph>
      <Paragraph >{location}</Paragraph>
  </Descript>

  <Stats >
    <List>
      <span>Followers</span>
      <span >{stats.followers}</span>
    </List>
    <List>
      <span >Views</span>
      <span >{stats.views }</span>
    </List>
    <List>
      <span >Likes</span>
      <span >{stats.likes}</span>
    </List>
  </Stats>
</Container>
);
};