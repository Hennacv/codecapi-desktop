import { UserCounter, UserCounterContainer, UserCounterTitle, UserProfileContainer, UserProfileEmail, UserProfileFunction, UserProfileHeader, UserProfileImage, UserProfileInfoContainer, UserProfileName, UserProfileTextContainer } from "./user-profile-styles.css";
import { useContext } from "react";
import { AuthContext } from "renderer/root";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return null;
  }

  console.log(user)

  return (
    <div>
      <div className={UserProfileContainer}>
        <div className={UserProfileInfoContainer}>
          {!user.photoURL ?
            <p className={UserProfileImage}>{user.displayName?.substring(0, 1)}</p>
            :
            <img className={UserProfileImage} src={user.photoURL} alt="User photo" referrerPolicy="no-referrer"/>
          }
          <div className={UserProfileTextContainer}>
            <label className={UserProfileName}>
              {user.displayName}
            </label>
            <label className={UserProfileFunction}>
              JavaScript Developer
            </label>
            <label className={UserProfileEmail}>
              {user.email}
            </label>
          </div>
        </div>
        <div className={UserCounterContainer}>
          <div>
            <label className={UserCounterTitle}>Questions</label>
            <p className={UserCounter}>21</p>
          </div>
          <div>
            <label className={UserCounterTitle}>Answers</label>
            <p className={UserCounter}>13</p>
          </div>
          <div>
            <label className={UserCounterTitle}>Accepted</label>
            <p className={UserCounter}>5</p>
          </div>
        </div>
      </div>
      <div className={UserProfileContainer}>
        <label className={UserProfileHeader}>Skills</label>
        <div>

        </div>
      </div>
    </div>
  );
}

export default UserProfile