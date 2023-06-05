import { useNavigate, useParams } from 'react-router-dom';
import {
  UserCounter,
  UserCounterContainer,
  UserCounterTitle,
  UserProfileContainer,
  UserProfileDescription,
  UserProfileDescriptionContainer,
  UserProfileEditButton,
  UserProfileEmail,
  UserProfileFunction,
  UserProfileHeader,
  UserProfileImage,
  UserProfileInfoContainer,
  UserProfileName,
  UserProfileSeparator,
  UserProfileTextContainer,
} from './user-profile-styles.css';
import UserSkills from '../user-skills/user-skills';
import { useGetProfile } from 'renderer/hooks/use-get-profile';
import Button from 'renderer/components/ui/button/button';
import IconEdit from 'assets/icons/icon-edit';
import { useUserContext } from 'renderer/hooks/use-user-context';
import { useTranslation } from 'react-i18next';

const UserProfile = () => {
  const {t} = useTranslation();
  const { id } = useParams();
  const { data: profile } = useGetProfile(parseInt(id!));
  const { user } = useUserContext();
  const navigate = useNavigate();

  if (!profile) {
    return null;
  }

  const { user: { name, email, description, tags, uid }, questionCount, answerCount } = profile;

  return (
    <div>
      <div className={UserProfileContainer}>
        <div className={UserProfileInfoContainer}>
          <p className={UserProfileImage}>
            {name?.substring(0, 1)}
          </p>
          <div className={UserProfileTextContainer}>
            <label className={UserProfileName}>{name}</label>
            <label className={UserProfileFunction}>JavaScript Developer</label>
            <label className={UserProfileEmail}>{email}</label>
          </div>
        </div>
        <div className={UserCounterContainer}>
          <div>
            <label className={UserCounterTitle}>{t('userProfile.stats.questions')}</label>
            <p className={UserCounter}>{profile.questionCount}</p>
          </div>
          <div>
            <label className={UserCounterTitle}>{t('userProfile.stats.answers')}</label>
            <p className={UserCounter}>{profile.answerCount}</p>
          </div>
          <div>
            <label className={UserCounterTitle}>{t('userProfile.stats.accepted')}</label>
            <p className={UserCounter}>0</p>
          </div>
        </div>
          <div className={UserProfileDescriptionContainer}>
            <hr className={UserProfileSeparator}/>
            <label className={UserProfileHeader}>Description</label>
            <p className={UserProfileDescription}>
              {description || "This user has not added their description yet."}
            </p>
          </div>
      </div>
      <UserSkills skills={tags} />
      {profile?.user.uid === user?.uid && (
        <div className={UserProfileEditButton}>
          <Button
            type="button"
            variant="small"
            onClick={() => navigate(`/users/edit/${id}`)}
          >
            <p>{t('userProfile.buttonEdit')}</p>
            <IconEdit variant="default" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
