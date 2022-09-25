import { Profile } from 'components/Profile/Profile.jsx';
import user from 'backEndData/user.json';
export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
