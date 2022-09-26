import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  const friendsEls = friends.map(({ id, avatar, name, isOnline }) => {
    return (
      <li key={id}>
        <span></span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </li>
    );
  });
  return <ul>{friendsEls}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
