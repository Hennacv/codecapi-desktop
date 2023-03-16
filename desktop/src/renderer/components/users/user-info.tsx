import { useContext } from 'react';
import { AuthContext } from 'renderer/root';
import {
  UserCard,
  UserInfoStyle,
  UserPhoto,
  UserSection,
  UserText,
} from './user-styles.css';

function UserInfo({ isExpanded }) {
  const { user } = useContext(AuthContext);

  return (
    <div className={UserSection}>
      <div className={UserCard}>
        <div>
          <img
            className={UserPhoto}
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div
          className={isExpanded ? UserInfoStyle.basic : UserInfoStyle.collapsed}
        >
          <p className={UserText.name}>{user?.displayName}</p>
          <p className={UserText.function}>Function</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
