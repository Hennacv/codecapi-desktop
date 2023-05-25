import { useParams } from 'react-router-dom';
import {
  UserCounter,
  UserCounterContainer,
  UserCounterTitle,
  UserProfileContainer,
  UserProfileEmail,
  UserProfileFunction,
  UserProfileImage,
  UserProfileInfoContainer,
  UserProfileName,
  UserProfileTextContainer,
} from './user-profile-styles.css';
import UserSkills from '../user-skills/user-skills';
import { useGetProfile } from 'renderer/hooks/use-get-profile';

const UserProfile = () => {
  const { id } = useParams();
  const { data: profile } = useGetProfile(parseInt(id!));

  if (!profile) {
    return null;
  }

  return (
    <div>
      <div className={UserProfileContainer}>
        <div className={UserProfileInfoContainer}>
          <p className={UserProfileImage}>
            {profile.user.name?.substring(0, 1)}
          </p>
          <div className={UserProfileTextContainer}>
            <label className={UserProfileName}>{profile.user.name}</label>
            <label className={UserProfileFunction}>JavaScript Developer</label>
            <label className={UserProfileEmail}>{profile.user.email}</label>
          </div>
        </div>
        <div className={UserCounterContainer}>
          <div>
            <label className={UserCounterTitle}>Questions</label>
            <p className={UserCounter}>{profile.questionCount}</p>
          </div>
          <div>
            <label className={UserCounterTitle}>Answers</label>
            <p className={UserCounter}>{profile.answerCount}</p>
          </div>
          <div>
            <label className={UserCounterTitle}>Accepted</label>
            <p className={UserCounter}>5</p>
          </div>
        </div>
      </div>
      <UserSkills skills={profile.user.tags} />
    </div>
  );
};

export default UserProfile;
