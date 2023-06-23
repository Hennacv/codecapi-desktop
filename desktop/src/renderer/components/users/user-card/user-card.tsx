import { User } from 'renderer/utils/types';
import {
  UserCardContainer,
  UserCardFunction,
  UserCardImage,
  UserCardName,
} from './user-card-styles.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface UserCard {
  user: User;
}

const UserCard = ({ user }: UserCard) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div
      key={user.id}
      className={UserCardContainer}
      onClick={() => goToProfile()}
    >
      <div className={UserCardImage}>
        <p>{user?.name?.substring(0, 1)}</p>
      </div>
      <p className={UserCardName}>{user.name}</p>
      <p className={UserCardFunction}>
        {user.jobtitle ? user.jobtitle : 'Capi'}
      </p>
      {user.team === 'none' ? (
        <p className={UserCardFunction}>{t('common.teamless')}</p>
      ) : (
        <p className={UserCardFunction}>{t('common.team')} {user.team}</p>
      )}
    </div>
  );
};

export default UserCard;
