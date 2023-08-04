import { Container,Descript,Image,Paragraph,Stats,List } from "./Profile.styled";

export const Profile = ({user}) => {  
    
    return (
<Container >
  <Descript >
    <Image
      src={user.avatar}
      alt={user.username}      
      width={100}      
    />
      <Paragraph className="name">{user.username}</Paragraph>
      <Paragraph >{user.tag}</Paragraph>
      <Paragraph >{user.location}</Paragraph>
  </Descript>

  <Stats >
    <List>
      <span>Followers</span>
      <span >{user.stats.followers}</span>
    </List>
    <List>
      <span >Views</span>
      <span >{user.stats.views }</span>
    </List>
    <List>
      <span >Likes</span>
      <span >{user.stats.likes}</span>
    </List>
  </Stats>
</Container>
);
};