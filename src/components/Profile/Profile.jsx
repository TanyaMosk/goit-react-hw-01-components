import PropTypes from 'prop-types'; 
import { Container, Descript, Image, Paragraph, Stats, List } from "./Profile.styled";

export const Profile = ({avatar,username,tag,location,stats}) => {  
    
  return (
  <Container >
    <Descript >
      <Image
      src={avatar}
      alt={username}/>
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

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats:PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}


