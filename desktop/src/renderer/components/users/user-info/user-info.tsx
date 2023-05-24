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
}

const UserInfo = ({ isExpanded }: UserInfoProps) => {
  const { user } = useUserContext();

  return (
    <div className={UserInfoSection}>
      <div className={UserInfoCard}>
        <div className={UserInfoImage}>
          <p>{user.name.substring(0, 1)}</p>
        </div>
        <div className={isExpanded ? UserInfoStyle.basic : UserInfoStyle.collapsed}>
          <p className={UserText.name}>{user.name}</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
