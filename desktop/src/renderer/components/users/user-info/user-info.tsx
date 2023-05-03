import { useContext } from 'react';
import { AuthContext } from 'renderer/root';
import {
  UserInfoCard,
  UserInfoStyle,
  UserInfoImage,
  UserInfoSection,
  UserText,
} from './user-info-styles.css';

interface UserInfoProps {
  isExpanded: boolean;
}

const UserInfo = ({ isExpanded }: UserInfoProps) => {
  const { user } = useContext(AuthContext);

  return (
    <div className={UserInfoSection}>
      <div className={UserInfoCard}>
        <div className={UserInfoImage}>
          <p>{user?.displayName?.substring(0, 1)}</p>
        </div>
        <div className={isExpanded ? UserInfoStyle.basic : UserInfoStyle.collapsed}>
          <p className={UserText.name}>{user?.displayName}</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
