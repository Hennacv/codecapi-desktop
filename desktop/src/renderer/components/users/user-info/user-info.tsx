import { Link } from 'react-router-dom';
import {
  UserInfoCard,
  UserInfoStyle,
  UserInfoImage,
  UserInfoSection,
  UserText,
} from './user-info-styles.css';
import { useUserContext } from 'renderer/hooks/use-user-context';

interface UserInfoProps {
  isExpanded: boolean;
  to: string;
}

const UserInfo = ({ isExpanded, to }: UserInfoProps) => {
  const { user } = useUserContext();

  return (
    <div className={UserInfoSection}>
      <Link className={UserInfoCard} to={to}>
        <div className={UserInfoImage}>
          <p>{user.name.substring(0, 1)}</p>
        </div>
        <div
          className={isExpanded ? UserInfoStyle.basic : UserInfoStyle.collapsed}
        >
          <p className={UserText.name}>{user.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default UserInfo;
