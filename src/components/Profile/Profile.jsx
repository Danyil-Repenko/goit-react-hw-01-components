import PropTypes from 'prop-types';
import { Stats } from 'components/Profile/Stats/Stats.jsx';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <Stats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
