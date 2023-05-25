import { useNavigate, useParams } from 'react-router-dom';
import {
  UserCounter,
  UserCounterContainer,
  UserCounterTitle,
  UserProfileContainer,
  UserProfileEditButton,
  UserProfileEmail,
  UserProfileFunction,
  UserProfileImage,
  UserProfileInfoContainer,
  UserProfileName,
  UserProfileTextContainer,
} from './user-profile-styles.css';
import UserSkills from '../user-skills/user-skills';
import { useGetProfile } from 'renderer/hooks/use-get-profile';
import Button from 'renderer/components/ui/button/button';
import IconEdit from 'assets/icons/icon-edit';
import { useUserContext } from 'renderer/hooks/use-user-context';

const UserProfile = () => {
  const { id } = useParams();
  const { data: profile } = useGetProfile(parseInt(id!));
  const { user } = useUserContext();
  const navigate = useNavigate();

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
            <p className={UserCounter}>0</p>
          </div>
        </div>
      </div>
      <UserSkills skills={profile.user.tags} />
      {profile?.user.uid === user?.uid && (
        <div className={UserProfileEditButton}>
          <Button
            type="button"
            variant="smallSquare"
            onClick={() => navigate(`/users/edit/${id}`)}
            >
            <IconEdit variant="default"/>
            <p>Edit Profile</p>
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
