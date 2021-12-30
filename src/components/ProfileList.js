import Profile from "./Profile";
import PropTypes from 'prop-types';


function ProfileList({ items }) { 
   return (
      <ul>
      <Profile
         key={items.username}
  tag={items.tag}
  location={items.location}
  avatar={items.avatar}
  stats={items.stats}
  name={items.username}
/>
   </ul>
)
}

ProfileList.propTypes = {
   items: PropTypes.shape(),
}
export default ProfileList;