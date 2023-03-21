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
        <img
          className={UserInfoImage}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className={isExpanded ? UserInfoStyle.basic : UserInfoStyle.collapsed}>
          <p className={UserText.name}>{user?.displayName}</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
