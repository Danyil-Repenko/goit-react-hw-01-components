import PropTypes from 'prop-types';
import {
  List,
  ListEl,
  Name,
  OnlineIndecator,
} from 'components/FriendList/FriendList.styled';
export const FriendList = ({ friends }) => {
  const friendsEls = friends.map(({ id, avatar, name, isOnline }) => {
    return (
      <ListEl key={id}>
        <OnlineIndecator
          online={isOnline.toString() === 'true'}
        ></OnlineIndecator>
        <img src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
      </ListEl>
    );
  });
  return <List>{friendsEls}</List>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
