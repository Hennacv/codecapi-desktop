import { User } from 'renderer/utils/types';
import {
  UserCardButtonContainer,
  UserCardContainer,
  UserCardFunction,
  UserCardImage,
  UserCardName,
} from './user-card-styles.css';
import Button from 'renderer/components/ui/button/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface UserCard {
  user: User;
}

const UserCard = ({ user }: UserCard) => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div key={user.id} className={UserCardContainer}>
      <div className={UserCardImage}>
        <p>{user?.name?.substring(0, 1)}</p>
      </div>
      <p className={UserCardName}>{user.name}</p>
      <p className={UserCardFunction}>JavaScript Developer</p>
      <div className={UserCardButtonContainer}>
        <Button
          text={t('userCard.buttonNavigate')}
          type="button"
          variant="smallText"
          onClick={() => goToProfile()}
        />
      </div>
    </div>
  );
};

export default UserCard;
