import { User } from 'renderer/utils/types';
import {
  UserCardContainer,
  UserCardFunction,
  UserCardImage,
  UserCardName,
} from './user-card-styles.css';
import { useNavigate } from 'react-router-dom';

interface UserCard {
  user: User;
}

const UserCard = ({ user }: UserCard) => {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate(`/users/${user.id}`);
  };

  const assignedTeam = (team: string) => {
    if(team === 'blue') {
     return UserCardImage.blue
    }
    if(team === 'red') {
    return UserCardImage.red
    }
    if(team === 'yellow') {
    return UserCardImage.yellow
    }
    return UserCardImage.base
  }

  return (
    <div key={user.id} className={UserCardContainer} onClick={() => goToProfile()}>
      <div className={assignedTeam(user.team)}>
        <p>{user?.name?.substring(0, 1)}</p>
      </div>
      <p className={UserCardName}>{user.name}</p>
      <p className={UserCardFunction}>
        {user.jobtitle ? user.jobtitle : 'Capi'}</p>
    </div>
  );
};

export default UserCard;
